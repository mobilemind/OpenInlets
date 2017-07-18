"use strict";
module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    htmllint: {
      all: {"src": "index.html"},
      options: {
        errorLevels: ["error"],
        force: true,
        server: false
      }
    }
  });
  // Load plugin: "grunt-html"
  grunt.loadNpmTasks("grunt-html");

  // Load local tasks
  // grunt.loadTasks("tasks");

  // test
  grunt.registerTask("test", ["htmllint"]);

  // Default task
  grunt.registerTask("default", ["test"]);
};
