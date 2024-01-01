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
                "version": "1.1.1"
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
            "UtmStrip": {
                "file": "utmstrip.js",
                "version": "1.8.0"
            },
            "deLighter": {
                "file": "delighter.js",
                "version": "1.0.2"
            },
            "fyi": {
                "file": "fyi.js",
                "version": "3.2.1"
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
                README ='README.md',
                srcLen = readOrFail(origFile).length,
                thisFile = `web/${this.data.file}`;
            let readMeString = readOrFail(README),
                theCode = readOrFail(thisFile);
            theCode = `${theCode}void'${this.data.version}'`;
            // URL encoding for javascript: URL avoids RegEx & HTML issues
            // with things like: "$&*+/<>?[]\^; also force encode '*' as %2A
            theCode = `javascript:${encodeURIComponent(theCode).replace(/\*/g, '%2A')}`;
            // un-encode a couple of generally safe chars for URLs
            theCode = theCode.replace(/%23/g, '#').replace(/%3A/g, ':').replace(/%3D/g, '=');
            grunt.file.write(thisFile, theCode);
            // output some stats
            const webLen = theCode.length;
            const diff = srcLen - webLen,
                ratio = (diff / srcLen * 100).toFixed(1);
            grunt.log.writeln(`${this.target} v${this.data.version}, src: ${srcLen} bytes, web: ${webLen} bytes (-${ratio}%)`);
            /* eslint-disable no-useless-escape */
            // update bullet list of JavaScript Bookmarks
            readMeString = readMeString.replace(new RegExp(`\\+ __\\[${this.target}\\] v\\d+\\.\\d+\\.\\d+__:`), `+ __[${this.target}] v${this.data.version}__:`);
            // update bullet list of URL-based Setup links
            readMeString = readMeString.replace(new RegExp(`-- \\[Setup ${this.target}\\] v\\d+\\.\\d+\.\\d+`), `-- [${this.target}] v${this.data.version}`);
            // update JavaScript (reference) links
            readMeString = readMeString.replace(new RegExp(`\\[${this.target}\\]: javascript:.*'\\d+\\.\\d+\\.\\d+' "${this.target}"`), `[${this.target}]: ${theCode}`);
            // update Setup (reference) links
            readMeString = readMeString.replace(new RegExp(`https://mobilemind\\.github\\.io/OpenInlets/x/#javascript:.*'\\d+\\.\\d+.\\d+' "Setup ${this.target}"`), `https://mobilemind.github.io/OpenInlets/x/#${theCode} "Setup ${this.target}"`);
            /* eslint-enable no-useless-escape */
            // update README file
            grunt.file.write(README, readMeString);
        }
    );

    // build task
    grunt.registerTask("build", ["uglify", "buildbookmarklet"]);

    // lint task
    grunt.registerTask("lint", ["eslint"]);

    // Default task
    grunt.registerTask("default", ["lint", "build"]);

    // Deploy task
    // grunt.registerTask("deploy", ["default", "updatereadme"]);
};
