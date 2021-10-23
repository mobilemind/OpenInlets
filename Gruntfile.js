module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        "buildbookmarklet": {
            "IsItAws": {
                "file": "isitaws.js",
                "version": "1.3.2"
            },
            "KillStickyHeaders": {
                "file": "killStickyHeaders.js",
                "version": "1.2.0"
            },
            "ModifyUrl": {
                "file": "modifyurl.js",
                "version": "0.9.3"
            },
            "OpenIn1Password": {
                "file": "openin1password.js",
                "version": "1.5.1"
            },
            "OpenInBrave": {
                "file": "openinbrave.js",
                "version": "1.0.1"
            },
            "OpenInCodeBucket": {
                "file": "openincodebucket.js",
                "version": "1.3.1"
            },
            "OpenInCodeHub": {
                "file": "openincodehub.js",
                "version": "1.3.1"
            },
            "OpenInDolphin": {
                "file": "openindolphin.js",
                "version": "1.0.0"
            },
            "OpenInFirefox": {
                "file": "openinfirefox.js",
                "version": "1.5.0"
            },
            "OpenInFirefox-Focus": {
                "file": "openinfirefox-focus.js",
                "version": "1.0.0"
            },
            "OpenInFirefox-Private": {
                "file": "openinfirefox-private.js",
                "version": "1.0.0"
            },
            "OpenInGoodReader": {
                "file": "openingoodreader.js",
                "version": "1.5.1"
            },
            "OpenInGoogleChrome": {
                "file": "openingooglechrome.js",
                "version": "1.4.0"
            },
            "OpenInGoogleMaps": {
                "file": "openingooglemaps.js",
                "version": "2.2.0"
            },
            "OpenInOpera": {
                "file": "openinopera.js",
                "version": "1.0.0"
            },
            "OpenInTextastic": {
                "file": "openintextastic.js",
                "version": "1.0.0"
            },
            "OpenInWorkingCopy": {
                "file": "openinworkingcopy.js",
                "version": "1.5.0"
            },
            "OpenIniOctocat": {
                "file": "openinioctocat.js",
                "version": "1.6.0"
            },
            "OpenURLParam": {
                "file": "openurlparam.js",
                "version": "1.0.0"
            },
            "SearchIn1Password": {
                "file": "searchin1password.js",
                "version": "1.4.2"
            },
            "UtmStrip": {
                "file": "utmstrip.js",
                "version": "1.6.1"
            }
        },
        "pkg": grunt.file.readJSON("package.json"),
        "shell": {"uglify_es": {"command": "for OJS in src/*.js; do uglifyjs --config-file .uglifyjs3.json --output \"web/$(basename \"$OJS\")\" \"$OJS\" ; done"}}
    });

    // Load plugins
    grunt.loadNpmTasks("grunt-shell");

    // version info
    grunt.log.writeln(`\n${grunt.config("pkg.name")} ${grunt.config("pkg.version")}`);

    // helper function for reading files
    function readOrFail(fileSpec) {
        /* eslint security/detect-non-literal-fs-filename: 0 */
        if (grunt.file.exists(fileSpec)) {
            const text = grunt.file.read(fileSpec);
            if (text.length > 0) {
                return text;
            }
        }
        return grunt.fail.fatal(`Can't read from ${fileSpec}`);
    }

    // buildbookmarklet
    grunt.registerMultiTask("buildbookmarklet", "make a simple javascript url",
        function() {
            const origFile = `src/${this.data.file}`,
                thisFile = `web/${this.data.file}`;
            let theCode = readOrFail(thisFile);
            // minimal URL encoding for javascript: URL (and '*' as %2A)
            theCode = `${theCode}void'${this.data.version}'`;
            theCode = `javascript:${encodeURIComponent(theCode).replace("*", "%2A")}`;
            grunt.file.write(thisFile, theCode);
            // output some stats
            grunt.log.writeln(`${this.target} v${this.data.version}`);
            grunt.log.writeln(`${origFile}: ${readOrFail(origFile).length} bytes`);
            grunt.log.writeln(`${thisFile}: ${theCode.length} bytes`);
        }
    );

    // set updatereadme targets & define replaceinreadme()
    grunt.config.set("updatereadme", grunt.config("buildbookmarklet"));
    const updatereadme = function(
        oldStrRegEx,
        newStr,
        readMeString,
        targetKind,
        targetName
    ) {
        let retVal = null;
        // fail early if there's no match
        if (!readMeString.match(oldStrRegEx)) {
            grunt.fail.fatal(`Can't find ${targetKind} references for ${targetName} using /${oldStrRegEx}/`);
        } else if ("UtmStrip" === targetName && "``javascript:...``" === targetKind) {
            retVal = readMeString.replace(oldStrRegEx, `[${targetName}] v${grunt.config.getRaw('buildbookmarklet.UtmStrip.version')} -PLACEHOLDER-`);
            retVal = retVal.replace("-PLACEHOLDER-", newStr.substr(2));
        } else if ("UtmStrip" === targetName && "javascript: URL" === targetKind) {
            retVal = readMeString.replace(oldStrRegEx, `[${targetName}]: -PLACEHOLDER-`);
            retVal = retVal.replace("-PLACEHOLDER-", newStr.substring(2, newStr.length - 2) +
                ` "${targetName}"`);
        } else {
            // 'normal' case; bookmarklet doesn't have internal RegEx symbols
            retVal = readMeString.replace(oldStrRegEx, newStr);
        }
        return retVal;
    };

    grunt.registerMultiTask("updatereadme", "update links in README.md", function() {
        // read external files
        let readMeString = readOrFail("README.md");
        const bookmarkletString = readOrFail(`web/${this.data.file}`);

        // update ``javascript:...`` blocks (double tick allows ES6 templates)
        readMeString = updatereadme(
            new RegExp("(\\[" + this.target + "\\] v\\d+\\.\\d+\\.\\d+ )``javascript:[^`].+`", "g"),
            "$1``" + bookmarkletString + "``", readMeString, "``javascript:...``",
            this.target);

        // update bookmarklet javascript URL link (w/entity encoded "&")
        readMeString = updatereadme(
            new RegExp("(\\[" + this.target + '\\]: )javascript.*( \\"' + this.target + '\\")', "g"),
            "$1" + bookmarkletString.replace(/&/g, "&amp;") + "$2",
            readMeString, "javascript: URL", this.target);

        // update reference link bookmarklet URL (de-encode & re-encode needed)
        readMeString = updatereadme(
            new RegExp("(\\[Setup " + this.target + '\\]: )http.*( \\"Setup ' + this.target + '\\")', "g"),
            "$1http://mmind.me/x/#" + bookmarkletString.replace("*", "%2A") +
            "$2", readMeString, "Setup link", this.target);

        // use regex to update version references
        readMeString = updatereadme(new RegExp("(" + this.target + "\\] v)\\d+\\.\\d+\\.\\d+", "g"),
            "$1" + this.data.version, readMeString, "version references",
            this.target);

        // update README.md file
        if (grunt.file.write("README.md", readMeString)) {
            return grunt.log.writeln(`README.md updated to ${this.target} ${this.data.version}`);
        }
        grunt.fail.fatal("Can't write to README.md. Recommended action: `git checkout -- README.md`");
        return null;
    });

    // Default task
    grunt.registerTask("default", ["shell:uglify_es", "buildbookmarklet"]);

    // Deploy task
    grunt.registerTask("deploy", ["default", "updatereadme"]);
};
