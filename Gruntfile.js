/* jshint -W097 */
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-karma');


  grunt.initConfig({
    meta: {
      karma: {
        files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'test/unit/*Spec.js'
        ]
      },
      banner: {
        delimiter: '\n *\t'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/angular-slugify.min.js': 'src/angular-slugify.js'
        }
      }
    },
    copy: {
      dist: {
        files: {
          'dist/angular-slugify.js': 'src/angular-slugify.js'
        }
      }
    },
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '/*<%= meta.banner.delimiter %>' + grunt.file.read('COPYING').split('\n').join('<%= meta.banner.delimiter %>') + '\n*/\n'
        },
        files: {
          src: ['dist/**/*.js']
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
      distMin: {
        options: {
          files: ['<%= meta.karma.files %>', 'dist/angular-slugify.min.js']
        }
      },
      dist: {
        options: {
          files: ['<%= meta.karma.files %>', 'dist/angular-slugify.js']
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
    'test:dev',
    'copy:dist',
    'uglify',
    'usebanner',
    'test:dist',
    'test:distMin'
  ]);

  grunt.registerTask('test', function (target) {
    if( ['distMin', 'dist', 'dev'].indexOf(target) >= 0 ) {
      grunt.task.run(['karma:' + target]);
    } else {
      grunt.task.run(['karma']);
    }
  });
};
