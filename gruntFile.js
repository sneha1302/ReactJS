module.exports = function(grunt) {

  // Load the plugin that provides the "jshint" task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint:{
      files: ['*.js','!gruntfile.js'],
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": false,
        "globals": {
          "jQuery": true
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js','src/**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
