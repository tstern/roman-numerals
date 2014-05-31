(function () {
	'use strict';

	module.exports = function (grunt) {

		// load grunt tasks automatically
		require('load-grunt-tasks')(grunt);

		// display required time for running a task
		require('time-grunt')(grunt);

		grunt.initConfig({
			watch: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				js: {
					files: ['app/source/**/*.js', 'test/source/**/*.spec.js'],
					tasks: ['karma:unit:run']
				},
				html: {
					files: ['app/index.html', 'app/views/*.tpl.html']
				},
				styl: {
					files: ['app/assets/styles/main.styl'],
					tasks: ['stylus']
				}
			},

			connect: {
				options: {
					port: 9000,
					hostname: 'localhost',
					livereload: 35729
				},

				livereload: {
					options: {
						open: true,
						base: ['app']
					}
				}
			},

			clean: {
				dist: [
					'.tmp',
					'dist/*'
				]
			},

			stylus: {
				compile: {
					files: {
						'app/assets/styles/main.css': 'app/assets/styles/main.styl'
					}
				}
			},

			karma: {
				unit: {
					configFile: 'karma.conf.js',
					background: true
				},
                once: {
                    configFile: 'karma.conf.js',
                    singleRun: true
                }
			}
		});

		grunt.registerTask('serve', [
			'clean:dist',
			'karma:unit:start',
			'connect:livereload',
			'watch'
		]);

		grunt.registerTask('test', [
			'karma:once'
		])
	};

}());