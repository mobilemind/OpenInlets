/*global module:true*/
module.exports = function(grunt) {
  grunt.initConfig({
    "buildbookmarklet": {
      "IsItAws": {
        "file": "isitaws.js",
        "version": "1.3.0"
      },
      "KillStickyHeaders": {
        "file": "killStickyHeaders.js",
        "version": "1.1.0"
      },
      "OpenIn1Password": {
        "file": "openin1password.js",
        "version": "1.4.0"
      },
      "OpenInBlogsy": {
        "file": "openinblogsy.js",
        "version": "1.3.0"
      },
      "OpenInCodeBucket": {
        "file": "openincodebucket.js",
        "version": "1.2.0"
      },
      "OpenInCodeHub": {
        "file": "openincodehub.js",
        "version": "1.2.0"
      },
      "OpenInFirefox": {
        "file": "openinfirefox.js",
        "version": "1.3.0"
      },
      "OpenInGoodReader": {
        "file": "openingoodreader.js",
        "version": "1.4.0"
      },
      "OpenInGoogleChrome": {
        "file": "openingooglechrome.js",
        "version": "1.3.0"
      },
      "OpenInGoogleMaps": {
        "file": "openingooglemaps.js",
        "version": "2.0.0"
      },
      "OpenInWorkingCopy": {
        "file": "openinworkingcopy.js",
        "version": "1.3.0"
      },
      "OpenIniOctocat": {
        "file": "openinioctocat.js",
        "version": "1.5.0"
      },
      "SearchIn1Password": {
        "file": "searchin1password.js",
        "version": "1.4.0"
      }
    },
    "eslint": {
      "options": {"configFile": ".eslintrc.yml"},
      "target": ["Gruntfile.js", "src/*.js"]
    },
    "pkg": grunt.file.readJSON("package.json"),
    "shell": {"uglify_es": {"command": "for OJS in src/*.js; do uglifyjs -m --output \"web/$(basename \"$OJS\")\" \"$OJS\" ; done"}},
    "yamllint": {
      "files": {"src": [".*.yml", "*.yml", "*.yaml"]},
      "options": {"schema": "FAILSAFE_SCHEMA"}
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-yamllint");

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
      // minimal URL encoding
      theCode = theCode.replace(/\+/g,"%2B");
      // prepend + append; write results
      theCode = `javascript:${theCode}void'${this.data.version}'`;
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
    if (readMeString.match(oldStrRegEx)) {
      return readMeString.replace(oldStrRegEx, newStr);
    }
    grunt.fail.fatal(`Can't find  ${targetKind} references for ${targetName}`);
    return null;
  };

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

  // preflight task
  grunt.registerTask("preflight", ["yamllint", "eslint"]);

  // Default task
  grunt.registerTask("default", ["preflight", "shell:uglify_es", "buildbookmarklet"]);

  // Deploy task
  grunt.registerTask("deploy", ["default", "updatereadme"]);
};
