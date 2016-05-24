module.exports = function(config){
  config.set({

    basePath : './www/',

    frameworks: ['jasmine'],

    files : [
      'lib/angular/angular.js',
      'lib/angular-ui-router/release/angular-ui-router.js',
      'lib/angular-mocks/angular-mocks.js',
      'lib/ionic/js/ionic.bundle.js',
      'js/**/*.js',
      'test/unit-tests/*.js'
    ],

    preprocessors: { },

    port: 9876,

    autoWatch : true,


    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'cordova-plugin-console',
            'cordova-plugin-device',
            'cordova-plugin-splashscreen',
            'cordova-plugin-statusbar',
            'cordova-plugin-whitelist',
            'ionic-plugin-keyboard'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};