// Karma configuration
// Generated on Wed May 16 2018 14:23:59 GMT+0100 (BST)

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    reporters: ['spec'],

    files: ['tests/*.js', 'src/*.js']

  });
};
