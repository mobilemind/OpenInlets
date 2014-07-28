/*global module:false*/
module.exports = function(grunt) {
  "use strict";
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    openIn1Password_version: "1.0.6",
    openInGoodReader_version: "1.0.0",
    openInGoogleMaps_version: "1.6.4",

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
        compress: {
          sequences: true,
          properties: true,
          dead_code: true,
          drop_debugger: true,
          unsafe: false,
          conditionals: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          hoist_funs: false,
          hoist_vars: false,
          if_return: true,
          join_vars: true,
          cascade: true,
          warnings: true
          },
        codegen: {quote_keys: false},
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

  grunt.registerTask('update-README', 'update reference links in README.md', function(bookmarkName, bookmarkletFile) {
    var readMeString = grunt.file.read('README.md');
    if ('' === readMeString) grunt.fail.fatal("Can't read from README.md");
    var bookmarkletFileString = grunt.file.read(bookmarkletFile);
    if ('' === bookmarkletFileString) grunt.fail.fatal("Can't read from " + bookmarkletFileString);
    var urlPreface = 'http://mmind.me/_?';
    // regex to match 'old' reference link bookmarklet URL
    var matchStr = '\\[Setup ' + bookmarkName + '\\]: .*\\"Setup ' + bookmarkName + '\\"';
    var refLinkRegEx = new RegExp(matchStr);
		// build up Markdown reference link...
    var refLink = '[Setup ' + bookmarkName + ']: ' + urlPreface;
    // ... append javascript with '&' replaced by entity '&amp;' and add title attribute
    refLink += bookmarkletFileString.replace('\\&','&amp;',"g") + ' "Setup ' +  bookmarkName + '"';
    // replace/update refLink
    if (grunt.file.write('README.md', readMeString.replace(refLinkRegEx, refLink))) {
    	return grunt.log.writeln('README.md' + ' updated with new ' + bookmarkName);
    }
    else grunt.fail.fatal("Can't write to README.md");
  });


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
