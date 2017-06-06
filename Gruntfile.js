/*global module:true*/
module.exports = function(grunt) {
  grunt.initConfig({
    "buildbookmarklet": {
      "IsItAws": {
        "file": "isitaws.js",
        "version": "1.1.0"
      },
      "OpenIn1Password": {
        "file": "openin1password.js",
        "version": "1.2.0"
      },
      "OpenInBlogsy": {
        "file": "openinblogsy.js",
        "version": "1.1.0"
      },
      "OpenInCodeBucket": {
        "file": "openincodebucket.js",
        "version": "1.0.0"
      },
      "OpenInCodeHub": {
        "file": "openincodehub.js",
        "version": "1.0.0"
      },
      "OpenInFirefox": {
        "file": "openinfirefox.js",
        "version": "1.1.0"
      },
      "OpenInGoodReader": {
        "file": "openingoodreader.js",
        "version": "1.2.0"
      },
      "OpenInGoogleChrome": {
        "file": "openingooglechrome.js",
        "version": "1.1.0"
      },
      "OpenInGoogleMaps": {
        "file": "openingooglemaps.js",
        "version": "1.8.0"
      },
      "OpenInWorkingCopy": {
        "file": "openinworkingcopy.js",
        "version": "1.1.0"
      },
      "OpenIniOctocat": {
        "file": "openinioctocat.js",
        "version": "1.3.0"
      },
      "SearchIn1Password": {
        "file": "searchin1password.js",
        "version": "1.2.1"
      }
    },
    "eslint": {
      "options": {"configFile": ".eslintrc.yml"},
      "target": ["Gruntfile.js", "src/*.js"]
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
        "beautify": false,
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
          "expression": true,
          "global_defs": {},
          "hoist_funs": false,
          "hoist_vars": false,
          "if_return": true,
          "join_vars": true,
          "keep_fargs": false,
          "loops": true,
          "negate_iife": true,
          "passes": 2,
          "properties": true,
          "pure_funcs": [],
          "pure_getters": true,
          "reduce_vars": true,
          "sequences": true,
          "side_effects": false,
          "top_retain": [],
          "toplevel": true,
          "unsafe": true,
          "unsafe_comps": true,
          "unsafe_math": true,
          "unsafe_proto": true,
          "unused": true,
          "warnings": true
        },
        "ie8": false,
        "mangle": {"toplevel": true},
        "maxLineLen": 32766,
        "output": {
          "ascii_only": true,
          "bracketize": false,
          "comments": false,
          "indent_level": 0,
          "max_line_len": 32766,
          "quote_keys": false,
          "quote_style": 1,
          "semicolons": true
        },
        "preserveComments": false,
        "properties": false,
        "quoteStyle": 1,
        "report": "min",
        "stats": true,
        "wrap": false
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
  grunt.log.writeln(`\n${grunt.config("pkg.name")} ${grunt.config("pkg.version")}`);

  // buildbookmarklet
  grunt.registerMultiTask("buildbookmarklet", "build bookmarklet", function() {
    grunt.config.set("js2uri.options.customVersion", this.data.version);
    grunt.config.set("js2uri.files.src", [`web/${this.data.file}`]);
    grunt.config.set("js2uri.files.dest", `web/${this.data.file}`);
    if (grunt.task.run(["js2uri"])) {
      return true;
    }
    grunt.fail.fatal(`Failed to js2uri() ${this.target}`);
    return false;
  });

  // set updatereadme targets & define replaceinreadme()
  grunt.config.set("updatereadme", grunt.config("buildbookmarklet"));
  const updatereadme = function(
      oldStrRegEx,
      newStr,
      readMeString,
      targetKind,
      targetName
    ) {
    if (readMeString.match(oldStrRegEx)) {
      return readMeString.replace(oldStrRegEx, newStr);
    }
    grunt.fail.fatal(`Can't find  ${targetKind} references for ${targetName}`);
    return null;
  };

  // helper function for updatereadme MultiTask
  function readOrFail(fileSpec) {
    let text = grunt.file.read(fileSpec) || grunt.fail.fatal(`1-Can't read from ${fileSpec}`);
    if (!text || "string" != typeof text || 0 === text.length) {
      text = null;
      grunt.fail.fatal(`Can't read from ${fileSpec}`);
    }
    return text;
  }

  grunt.registerMultiTask("updatereadme", "update links in README.md", function() {
    // read external files
    let readMeString = readOrFail("README.md");
    let bookmarkletString = readOrFail(`web/${this.data.file}`);

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
      return grunt.log.writeln(`README.md updated to ${this.target} ${this.data.version}`);
    }
    grunt.fail.fatal("Can't write to README.md. Recommended action: `git checkout -- README.md`");
    return null;
  });

  // Default task
  grunt.registerTask("default", ["yamllint", "eslint", "uglify:sourceFiles",
    "buildbookmarklet"]);

  // Deploy task
  grunt.registerTask("deploy", ["default", "updatereadme"]);
};
