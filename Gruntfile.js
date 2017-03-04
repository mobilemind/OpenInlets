/*global module:true*/
module.exports = function(grunt) {
  grunt.initConfig({
    "pkg": grunt.file.readJSON("package.json"),

    "eslint": {
      "options": {"configFile": ".eslintrc.yml"},
      "target": ["Gruntfile.js", "src/*.js"]
    },

    "uglify": {
      "options": {
        "stats": true,
        "maxLineLen": 32766,
        "preserveComments": false,
        "screwIE8": true,
        "quoteStyle": 1,
        "mangleProperties": false,
        "mangle": {
          "sort": true,
          "toplevel": true
        },
        "compress": {
          "sequences": true,
          "properties": true,
          "dead_code": true,
          "drop_console": true,
          "drop_debugger": true,
          "unsafe": true,
          "conditionals": true,
          "comparisons": true,
          "evaluate": true,
          "booleans": true,
          "loops": true,
          "unused": true,
          "hoist_funs": false,
          "hoist_vars": false,
          "if_return": true,
          "join_vars": true,
          "cascade": true,
          "collapse_vars": true,
          "warnings": true,
          "negate_iife": true,
          "keep_fargs": false,
          "side_effects": true,
          "global_defs": {}
        },
        "codegen": {
          "beautify": false,
          "indent_level": 0,
          "quote_keys": false,
          "space_colon": false,
          "max_line_len": 32766,
          "ie_proof": false,
          "bracketize": false,
          "comments": false,
          "semicolons": true,
          "quote_style": 1
        },
        "report": "min"
      },
      "sourceFiles": {
        "files": [{
          "expand": true,
          "cwd": "src",
          "src": "*.js",
          "dest": "web"
        }]
      }
    },

    "js2uri": {
      "options": {
        "protocol": "javascript:",
        "useNewlineEOL": true,
        "useSingleQuote": true,
        "appendVoid": true,
        "customVersion": "",
        "appendVersion": true,
        "noLastSemicolon": true,
        "forceLastSemicolon": false,
        "entityEncode": false
      }
    },

    "buildbookmarklet": {
      "OpenIn1Password": {
        "version": "1.1.0",
        "file": "openin1password.js"
      },
      "OpenInBlogsy": {
        "version": "1.0.0",
        "file": "openinblogsy.js"
      },
      "OpenInGoodReader": {
        "version": "1.1.0",
        "file": "openingoodreader.js"
      },
      "OpenInGoogleChrome": {
        "version": "1.0.0",
        "file": "openingooglechrome.js"
      },
      "OpenInGoogleMaps": {
        "version": "1.7.1",
        "file": "openingooglemaps.js"
      },
      "OpenIniOctocat": {
        "version": "1.1.0",
        "file": "openinioctocat.js"
      },
      "SearchIn1Password": {
        "version": "1.1.0",
        "file": "searchin1password.js"
      }
    },

    "nodeunit": {"files": ["test/*.js"]},

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
  });

  // set updatereadme targets & define replaceinreadme()
  grunt.config.set("updatereadme", grunt.config("buildbookmarklet"));
  const updatereadme = function(oldStrRegEx, newStr, readMeString, targetKind, targetName) {
    if (readMeString.match(oldStrRegEx)) {
      return readMeString.replace(oldStrRegEx, newStr);
    }
    grunt.fail.fatal("Can't find " + targetKind + " references for " + targetName);
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
        new RegExp("(\\[" + this.target + "\\] v\\d+\\.\\d+\\.\\d+ )`javascript:[^`].+`", " "),
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
  });

  // Default task
  grunt.registerTask("default", ["yamllint", "eslint", "uglify:sourceFiles", "buildbookmarklet"]);

  // Deploy task
  grunt.registerTask("deploy", ["default", "updatereadme"]);

};
