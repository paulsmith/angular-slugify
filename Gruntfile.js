/* jshint -W097 */
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');


  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/angular-slugify.min.js': 'src/angular-slugify.js'
        }
      }
    },
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '/* \n' + grunt.file.read('COPYING') + '*/'
        },
        files: {
          src: ['dist/angular-slugify.min.js']
        }
      }
    },
    jshint: {
      dev: {
        options: {
          globals: {
            module: true,
          }
        },
        src: ['Gruntfile.js', 'src/**/*.js'],
      },
      dist: ['dist/**/*.js']
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });

  grunt.registerTask('build', [
    'jshint:dev',
    'test',
    'uglify:dist',
    'usebanner:dist'
  ]);

  grunt.registerTask('test', [
    'karma:unit'
  ]);
};
