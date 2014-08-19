/*global module:false*/
module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      options: {
        bitwise: true,
        latedef: true,
        noarg: true,
        noempty: true,
        strict: false,
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
        mangle: {
          sort: true,
          toplevel: true
        },
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
          warnings: true,
          negate_iife: true,
          side_effects: true,
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
      sourceFiles: { files: [{
        expand: true,
        cwd: 'src',
        src: '*.js',
        dest: 'web'
      }]}
    },

    js2uri:  {
      options: {
        protocol: 'javascript:',
        useNewlineEOL: true,
        useSingleQuote: true,
        appendVoid: true,
        customVersion: '',
        appendVersion: true,
        noLastSemicolon: true,
        forceLastSemicolon: false,
        entityEncode: false
      }
    },

    buildbookmarklet: {
      OpenIn1Password: { version: "1.1.0", file: "openin1password.js" },
      OpenInBlogsy: { version: "1.0.0", file: "openinblogsy.js" },
      OpenInGoodReader: { version: "1.1.0", file: "openingoodreader.js" },
      OpenInGoogleMaps: { version: "1.7.1", file: "openingooglemaps.js" },
      OpenIniOctocat: { version: "1.1.0", file: "openinioctocat.js" },
      SearchIn1Password: { version: "1.0.0", file: "searchin1password.js" }
    },

    nodeunit: {
      files: ['test/*.js']
    }

  });

  // Load plugins: "jshint", "uglify", "nodeunit", "js2uri"
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('js2uri');

  // buildbookmarklet
  grunt.registerMultiTask('buildbookmarklet', 'build bookmarklet', function() {
    grunt.config.set('js2uri.options.customVersion', this.data.version);
    grunt.config.set('js2uri.files.src', [ 'web/' + this.data.file ]);
    grunt.config.set('js2uri.files.dest', 'web/' + this.data.file );
    if (!grunt.task.run([ "js2uri" ])) grunt.fail.fatal("Failed to js2uri() " + this.target);
    else return true;
  });

  // updatereadme
  grunt.config.set('updatereadme', grunt.config('buildbookmarklet'));
  grunt.registerMultiTask('updatereadme', 'update reference links in README.md', function() {
    // read external files
    var readMeString = grunt.file.read('README.md');
    if (!readMeString || 0 === readMeString.length) grunt.fail.fatal("Can't read from README.md");
    var bookmarkletString = grunt.file.read('web/' + this.data.file);
    if (!bookmarkletString || 0 === bookmarkletString.length) grunt.fail.fatal("Can't read from web/" + this.data.file);

    // update `javascript:...` code blocks
    var matchStr = '(\\[' + this.target + '\\] v\\d+\\.\\d+\\.\\d+ )`javascript:[^`].+`';
    var oldStrRegEx = new RegExp(matchStr,'g');
    var newStr = '$1`' + bookmarkletString + '`';
    if (readMeString.match(oldStrRegEx)) readMeString = readMeString.replace(oldStrRegEx, newStr);
    else grunt.fail.fatal("Can't find `javascript:...` references for " + this.target);

    // use regex to update bookmarklet javascript URL link
    // 1st entity encode "&"
    bookmarkletString = bookmarkletString.replace('\\&', '&amp;');
    matchStr = '(\\[' + this.target + '\\]: )javascript.*( \\"' + this.target + '\\")';
    oldStrRegEx = new RegExp(matchStr,'g');
    newStr = '$1' + bookmarkletString + '$2';
    if (readMeString.match(oldStrRegEx)) readMeString = readMeString.replace(oldStrRegEx, newStr);
    else return grunt.fail.fatal("Can't find javascript: URL for " + this.target);

    // use regex to update reference link bookmarklet URL
    matchStr = '(\\[Setup ' + this.target + '\\]: )http.*( \\"Setup ' + this.target + '\\")';
    oldStrRegEx = new RegExp(matchStr,'g');
    newStr = '$1' + 'http://mmind.me/_?' + bookmarkletString + '$2';
    if (readMeString.match(oldStrRegEx)) readMeString = readMeString.replace(oldStrRegEx, newStr);
    else return grunt.fail.fatal("Can't find reference link for " + this.target);

    // use regex to update version references
    matchStr = '(' + this.target + '\\] v)\\d+\\.\\d+\\.\\d+';
    oldStrRegEx = new RegExp(matchStr,'g');
    newStr = '$1' + this.data.version ;
    if (readMeString.match(oldStrRegEx)) readMeString = readMeString.replace(oldStrRegEx, newStr);
    else grunt.fail.fatal("Can't find version references for " + this.target);

    // update README.md file
    if (grunt.file.write('README.md', readMeString)) return grunt.log.writeln('README.md updated to ' + this.target + ' ' + this.data.version);
    else grunt.fail.fatal("Can't write to README.md. Recommended action: `git checkout -- README.md`");
  });

  // Default task
  grunt.registerTask('default', [ "jshint:files", "uglify:sourceFiles", "buildbookmarklet" ] );

  // Deploy task
  grunt.registerTask('deploy', [ "default", "updatereadme" ] );

};
