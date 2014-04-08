module.exports = function (grunt) {
	console.log(grunt.option('env') || 'development');
	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					findNestedDependencies : true,
					mainConfigFile : 'public/rconfig.js',
					name: 'main',
					baseUrl : 'public/js',
					out : 'public/build.js',
					optimize : 'uglify'
				}
			}
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true
			},
			files: {
				src: ['public/js/**/*.js']
			}
		},
		watch: {
			options: {
				livereload: true
			},
			js: {
				files: ['<%= jshint.files.src %>'],
				tasks: ['jshint']
			}
		},
		bower : {
			target : {
				rjsConfig : 'public/js/main.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-requirejs');

	//grunt.registerTask('build', ['copy', 'sass', 'requirejs', 'jshint']);
	grunt.registerTask('default', ['watch']);

	//grunt.registerTask('launch', ['copy', 'concurrent']);
};
