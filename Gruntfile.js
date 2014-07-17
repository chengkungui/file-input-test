/**
 * Created by chengkungui on 24/02/2014.
 */

module.exports = function(grunt) {

//    Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        protractor: {
            options:{
                configFile: "node_modules/protractor/referenceConf.js",
                keepAlive: false,
                noColor: false
            },
            test:{
                configFile: "protractor.conf.js",
                noColor: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
};