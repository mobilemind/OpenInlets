/*global module:false*/
module.exports = function(grunt) {
  "use strict";
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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

  // OpenIn1Password
  grunt.registerTask('OpenIn1Password', [ "uglify:openin1password", "js2uri:openin1password" ] );

  // OpenInGoodReader
  grunt.registerTask('OpenInGoodReader', [ "uglify:openingoodreader", "js2uri:openingoodreader" ] );

  // OpenInGoogleMaps
  grunt.registerTask('OpenInGoogleMaps', [ "uglify:openingooglemaps", "js2uri:openingooglemaps" ] );

  // Default task
  // grunt.registerTask('default', [ "jshint:files", "uglify", "js2uri:files"] );
  grunt.registerTask('default', [ "jshint:files", "OpenIn1Password", "OpenInGoodReader", "OpenInGoogleMaps" ] );

};
