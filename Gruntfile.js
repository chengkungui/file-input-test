/**
 * Created by chengkungui on 24/02/2014.
 */

module.exports = function(grunt) {

//    Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        protractor: {
            options:{
                configFile: "protractor.conf.js",
                keepAlive: false,
                noColor: false
            },
            firefox:{
                capabilities: {
                    'browserName': 'firefox'
                }
            },
            chrome:{
                capabilities: {
                    'browserName': 'chrome'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
};