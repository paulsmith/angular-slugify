/* jshint -W097 */
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');


  grunt.initConfig({
    meta: {
      karma: {
        files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'test/unit/*Spec.js'
        ]
      }
    },
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
      options: {
        configFile: 'test/karma.conf.js'
      },
      dist: {
        options: {
          files: ['<%= meta.karma.files %>', 'dist/angular-slugify.min.js']
        }
      },
      dev: {
        options: {
          files: ['<%= meta.karma.files %>', 'src/angular-slugify.js']
        }
      }
    }
  });

  grunt.registerTask('build', [
    'jshint:dev',
    'uglify',
    'usebanner',
    'test:dist'
  ]);

  grunt.registerTask('test', function (target) {
    if( ['dist', 'dev'].indexOf(target) >= 0 ) {
      grunt.task.run(['karma:' + target]);
    } else {
      grunt.task.run(['karma']);
    }
  });
};
