/*global module:true*/
module.exports = function(grunt) {
    grunt.initConfig({
        "buildbookmarklet": {
            "IsItAws": {
                "file": "isitaws.js",
                "version": "1.0.0"
            },
            "OpenIn1Password": {
                "file": "openin1password.js",
                "version": "1.1.0"
            },
            "OpenInBlogsy": {
                "file": "openinblogsy.js",
                "version": "1.0.0"
            },
            "OpenInFirefox": {
                "file": "openinfirefox.js",
                "version": "1.0.0"
            },
            "OpenInGoodReader": {
                "file": "openingoodreader.js",
                "version": "1.1.0"
            },
            "OpenInGoogleChrome": {
                "file": "openingooglechrome.js",
                "version": "1.0.0"
            },
            "OpenInGoogleMaps": {
                "file": "openingooglemaps.js",
                "version": "1.7.1"
            },
            "OpenIniOctocat": {
                "file": "openinioctocat.js",
                "version": "1.1.0"
            },
            "SearchIn1Password": {
                "file": "searchin1password.js",
                "version": "1.1.0"
            }
        },
        "eslint": {
          "options": {"configFile": ".eslintrc.yml"},
          "target": ["Gruntfile.js", "src/*.js", "README.md"]
        },
        "js2uri": {
            "options": {
                "appendVersion": true,
                "appendVoid": true,
                "customVersion": "",
                "entityEncode": false,
                "forceLastSemicolon": false,
                "noLastSemicolon": true,
                "protocol": "javascript:",
                "useNewlineEOL": true,
                "useSingleQuote": true
            }
        },
        "nodeunit": {"files": ["test/*.js"]},
        "pkg": grunt.file.readJSON("package.json"),
        "uglify": {
            "options": {
                "codegen": {
                    "beautify": false,
                    "bracketize": false,
                    "comments": false,
                    "ie_proof": false,
                    "indent_level": 0,
                    "max_line_len": 32766,
                    "quote_keys": false,
                    "quote_style": 1,
                    "semicolons": true,
                    "space_colon": false
                },
                "compress": {
                    "booleans": true,
                    "cascade": true,
                    "collapse_vars": true,
                    "comparisons": true,
                    "conditionals": true,
                    "dead_code": true,
                    "drop_console": true,
                    "drop_debugger": true,
                    "evaluate": true,
                    "global_defs": {},
                    "hoist_funs": false,
                    "hoist_vars": false,
                    "if_return": true,
                    "join_vars": true,
                    "keep_fargs": false,
                    "loops": true,
                    "negate_iife": true,
                    "properties": true,
                    "sequences": true,
                    "side_effects": true,
                    "unsafe": true,
                    "unused": true,
                    "warnings": true
                },
                "mangle": {
                    "sort": true,
                    "toplevel": true
                },
                "mangleProperties": false,
                "maxLineLen": 32766,
                "preserveComments": false,
                "quoteStyle": 1,
                "report": "min",
                "screwIE8": true,
                "stats": true
            },
            "sourceFiles": {
                "files": [{
                    "cwd": "src",
                    "dest": "web",
                    "expand": true,
                    "src": "*.js"
                }]
            }
        },
        "yamllint": {"files": {"src": [".*.yml", "*.yml", "*.yaml"]}}
    });

    // Load plugins: "uglify", "nodeunit", "eslint", "js2uri", "yamllint"
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("js2uri");
    grunt.loadNpmTasks("grunt-yamllint");

    // version info
    grunt.log.writeln("\n" + grunt.config("pkg.name") + " " + grunt.config("pkg.version"));

    // buildbookmarklet
    grunt.registerMultiTask("buildbookmarklet", "build bookmarklet", function() {
        grunt.config.set("js2uri.options.customVersion", this.data.version);
        grunt.config.set("js2uri.files.src", ["web/" + this.data.file]);
        grunt.config.set("js2uri.files.dest", "web/" + this.data.file);
        if (grunt.task.run(["js2uri"])) {
            return true;
        }
        grunt.fail.fatal("Failed to js2uri() " + this.target);
        return false;
    });

    // set updatereadme targets & define replaceinreadme()
    grunt.config.set("updatereadme", grunt.config("buildbookmarklet"));
    const updatereadme = function(oldStrRegEx, newStr, readMeString, targetKind, targetName) {
        if (readMeString.match(oldStrRegEx)) {
            return readMeString.replace(oldStrRegEx, newStr);
        }
        grunt.fail.fatal("Can't find " + targetKind + " references for " + targetName);
        return null;
    };

    grunt.registerMultiTask("updatereadme", "update reference links in README.md", function() {
        // read external files
        let readMeString = grunt.file.read("README.md");
        if (!readMeString || 0 === readMeString.length) {
            grunt.fail.fatal("Can't read from README.md");
        }
        let bookmarkletString = grunt.file.read("web/" + this.data.file);
        if (!bookmarkletString || 0 === bookmarkletString.length) {
            grunt.fail.fatal("Can't read from web/" + this.data.file);
        }

        // update `javascript:...` code blocks
        readMeString = updatereadme(
            new RegExp("(\\[" + this.target + "\\] v\\d+\\.\\d+\\.\\d+ )`javascript:[^`].+`", "g"),
            "$1`" + bookmarkletString + "`", readMeString, "`javascript:...`",
        this.target);

        // use regex to update bookmarklet javascript URL link
        // 1st entity encode "&"
        bookmarkletString = bookmarkletString.replace("\\&", "&amp;");
        readMeString = updatereadme(
            new RegExp("(\\[" + this.target + '\\]: )javascript.*( \\"' + this.target + '\\")', "g"),
            "$1" + bookmarkletString + "$2", readMeString, "javascript: URL",
        this.target);

        // use regex to update reference link bookmarklet URL
        readMeString = updatereadme(
            new RegExp("(\\[Setup " + this.target + '\\]: )http.*( \\"Setup ' + this.target + '\\")', "g"),
            "$1http://mmind.me/_?" + bookmarkletString + "$2", readMeString, "reference link",
        this.target);

        // use regex to update version references
        readMeString = updatereadme(new RegExp("(" + this.target + "\\] v)\\d+\\.\\d+\\.\\d+", "g"),
            "$1" + this.data.version, readMeString, "version references",
        this.target);

        // update README.md file
        if (grunt.file.write("README.md", readMeString)) {
            return grunt.log.writeln("README.md updated to " + this.target + " " + this.data.version);
        }
        grunt.fail.fatal("Can't write to README.md. Recommended action: `git checkout -- README.md`");
        return null;
    });

    // Default task
    grunt.registerTask("default", ["yamllint", "eslint", "uglify:sourceFiles", "buildbookmarklet"]);

    // Deploy task
    grunt.registerTask("deploy", ["default", "updatereadme"]);

};
