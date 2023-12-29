module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        "buildbookmarklet": {
            "IsItAws": {
                "file": "isitaws.js",
                "version": "1.3.3"
            },
            "KillStickyHeaders": {
                "file": "killStickyHeaders.js",
                "version": "1.2.1"
            },
            "Linklighter": {
                "file": "linklighter.js",
                "version": "1.1.0"
            },
            "OpenIn1Password": {
                "file": "openin1password.js",
                "version": "1.6.1"
            },
            "OpenInBrave": {
                "file": "openinbrave.js",
                "version": "1.0.2"
            },
            "OpenInFirefox": {
                "file": "openinfirefox.js",
                "version": "1.5.1"
            },
            "OpenInFirefox-Focus": {
                "file": "openinfirefox-focus.js",
                "version": "1.0.1"
            },
            "OpenInFirefox-Private": {
                "file": "openinfirefox-private.js",
                "version": "1.0.1"
            },
            "OpenInGoodReader": {
                "file": "openingoodreader.js",
                "version": "1.5.2"
            },
            "OpenInGoogleChrome": {
                "file": "openingooglechrome.js",
                "version": "1.4.1"
            },
            "OpenInGoogleMaps": {
                "file": "openingooglemaps.js",
                "version": "2.2.1"
            },
            "OpenInTextastic": {
                "file": "openintextastic.js",
                "version": "1.0.1"
            },
            "OpenInWorkingCopy": {
                "file": "openinworkingcopy.js",
                "version": "1.5.1"
            },
            "OpenURLParam": {
                "file": "openurlparam.js",
                "version": "1.0.1"
            },
            "SearchIn1Password": {
                "file": "searchin1password.js",
                "version": "1.5.1"
            },
            "UtmStrip": {
                "file": "utmstrip.js",
                "version": "1.7.0"
            },
            "deLighter": {
                "file": "delighter.js",
                "version": "1.0.1"
            },
            "x-man": {
                "file": "x-man.js",
                "version": "1.1.1"
            }
        },
        "eslint": {
            "options": {
              "failOnError": true,
              "ignore": false,
              "overrideConfigFile": ".github/linters/.eslintrc.js"
            },
            "target": [".github/linters/.*.js", "Gruntfile.js", "package.json", "src/*.js"]
        },
        "pkg": grunt.file.readJSON("package.json"),
        "uglify": {
            "options": {
                "compress": {
                    "drop_console": true,
                    "expression": true,
                    "passes": 2,
                    "unsafe": true,
                    "unsafe_comps": true,
                    "unsafe_math": true,
                    "unsafe_proto": true,
                    "unsafe_undefined": true
                },
                "mangle": {
                    "toplevel": true
                },
                "output": {
                    "beautify": false,
                    "indent_level": 0,
                    "quote_style": 1
                },
                "toplevel": true,
                "warnings": true,
                "webkit": true
            },
            "sourceFiles": {
                "files": [{
                    "cwd": "src",
                    "dest": "web",
                    "expand": true,
                    "src": "*.js"
                }]
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-eslint");

    // version info
    grunt.log.writeln(`\n${grunt.config("pkg.name")} ${grunt.config("pkg.version")}`);

    // helper function for reading files
    function readOrFail(fileSpec) {
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
            theCode = `${theCode}void'${this.data.version}'`;
            // URL encoding for javascript: URL avoids RegEx & HTML issues
            // with things like: "$&*+/<>?[]\^; also force encode '*' as %2A
            theCode = `javascript:${encodeURIComponent(theCode).replace(/\*/g, "%2A")}`;
            // un-encode a couple of generally safe chars for URLs
            theCode = theCode.replace(/%3A/g, ":");
            theCode = theCode.replace(/%3D/g, "=");
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

        if (readMeString.match(oldStrRegEx)) {
            // 'normal' case; bookmarklet doesn't have internal RegEx symbols
            retVal = readMeString.replace(oldStrRegEx, newStr);
        } else {
            // fail early if there's no match
            grunt.fail.fatal(`Can't find ${targetKind} references for ${targetName} using /${oldStrRegEx}/`);
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
            "$1https://mobilemind.github.io/OpenInlets/x/#" + bookmarkletString.replace(/\*/g, "%2A") +
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

    // build task
    grunt.registerTask("build", ["uglify", "buildbookmarklet"]);

    // lint task
    grunt.registerTask("lint", ["eslint"]);

    // Default task
    grunt.registerTask("default", ["lint", "build"]);

    // Deploy task
    grunt.registerTask("deploy", ["default", "updatereadme"]);
};
