/*global module:false*/
module.exports = function(grunt) {
  "use strict";
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    versionOpenIn1Password: "1.0.6",
    versionOpenInGoodReader: "1.0.0",
    versionOpenInGoogleMaps: "1.6.4",

    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      options: {
        bitwise: true,
        latedef: true,
        noarg: true,
        noempty: true,
        strict: true,
        trailing: true,
        undef: true,
        unused: true,
        boss: true,
        browser: true,
        eqnull: true,
        evil: true,
        lastsemic: true,
        multistr: true,
        scripturl: true,
        sub: true

      }
    },
    uglify: {
      options: {
        stats: true,
        mangle: true,
        compress: {
          sequences: true,
          properties: true,
          dead_code: true,
          drop_console: true,
          drop_debugger: true,
          unsafe: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          hoist_funs: false,
          hoist_vars: false,
          if_return: true,
          join_vars: true,
          cascade: true,
          negate_iife: true,
          side_effects: true,
          warnings: true,
          global_defs: {}
          },
        codegen: {
          quote_keys: false,
          space_colon: false,
          max_line_len: 32766,
          ie_proof: false,
          bracketize: false,
          comments: false,
          semicolons: true
        },
        report: 'min'
      },
      openin1password: { src: ['src/openIn1Password.js'], dest: 'web/openIn1Password.js' },
      openingoodreader: { src: ['src/openInGoodReader.js'], dest: 'web/openInGoodReader.js' },
      openingooglemaps: { src: ['src/openInGoogleMaps.js'], dest: 'web/openInGoogleMaps.js' }
    },

    js2uri:  {
      options: {
        protocol: 'javascript:',
        useNewlineEOL: true,
        useSingleQuote: true,
        appendVoid: true,
        // customVersion: '', // use value from meta.version above
        appendVersion: true,
        noLastSemicolon: true,
        forceLastSemicolon: false,
        entityEncode: false
      },
      openin1password: { src: ['web/openIn1Password.js'], dest: 'web/openIn1Password.js' },
      openingoodreader: { src: ['web/openInGoodReader.js'], dest: 'web/openInGoodReader.js' },
      openingooglemaps: { src: ['web/openInGoogleMaps.js'], dest: 'web/openInGoogleMaps.js' }
    }
  });

  // Load "jshint" plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load "uglify" plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load "js2uri" plugin
  grunt.loadNpmTasks('js2uri');

  grunt.registerTask('update-README', 'update reference links in README.md',
    function(bookmarkName, bookmarkletFile) {
      // read external files
      var readMeString = grunt.file.read('README.md');
      if ('' === readMeString) grunt.fail.fatal("Can't read from README.md");
      var bookmarkletFileString = grunt.file.read(bookmarkletFile);
      if ('' === bookmarkletFileString) grunt.fail.fatal("Can't read from " + bookmarkletFileString);
      var bookmarkletURLwEntities = bookmarkletFileString.replace('\\&','&amp;');

      // use regex to update bookmarklet javascript URL link
      var matchStr = '(\\[' + bookmarkName + '\\]: ).*( \\"' + bookmarkName + '\\")';
      var oldStrRegEx = new RegExp(matchStr,'g');
			var newStr = '$1' + bookmarkletURLwEntities + '$2';
      readMeString = readMeString.replace(oldStrRegEx, newStr);

      // use regex to update reference link bookmarklet URL
      matchStr = '(\\[Setup ' + bookmarkName + '\\]: ).*( \\"Setup ' + bookmarkName + '\\")';
      oldStrRegEx = new RegExp(matchStr,'g');
      newStr = '$1' + 'http://mmind.me/_?' + bookmarkletURLwEntities + '$2';
			readMeString = readMeString.replace(oldStrRegEx, newStr);

      // use regex to update version references
      matchStr = '(' + bookmarkName + '\\] v)\\d+\\.\\d+\\.\\d+';
      oldStrRegEx = new RegExp(matchStr,'g');
      newStr = '$1' + grunt.config('version' + bookmarkName);
			readMeString = readMeString.replace(oldStrRegEx, newStr);

			// update README.md file
      if (grunt.file.write('README.md', readMeString)) {
        return grunt.log.writeln('README.md updated to ' + bookmarkName + ' ' + grunt.config('version' + bookmarkName));
      }
      else grunt.fail.fatal("Can't write to README.md. Recommended action: `git checkout -- README.md`");
    }
  );

  // OpenIn1Password
  grunt.registerTask('OpenIn1Password', [ "uglify:openin1password", "js2uri:openin1password" ] );

  // OpenInGoodReader
  grunt.registerTask('OpenInGoodReader', [ "uglify:openingoodreader", "js2uri:openingoodreader" ] );

  // OpenInGoogleMaps
  grunt.registerTask('OpenInGoogleMaps', [ "uglify:openingooglemaps", "js2uri:openingooglemaps" ] );

  // Default task
  // grunt.registerTask('default', [ "jshint:files", "uglify", "js2uri:files"] );
  grunt.registerTask('default', [ "jshint:files", "OpenIn1Password", "OpenInGoodReader", "OpenInGoogleMaps" ] );

  // Deploy task
  grunt.registerTask('deploy', [ "default",
  	"update-README:OpenIn1Password:web/openIn1Password.js",
  	"update-README:OpenInGoodReader:web/openInGoodReader.js",
  	"update-README:OpenInGoogleMaps:web/openInGoogleMaps.js" ] );

};
