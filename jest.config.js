module.exports = {
    modulePaths: ['/shared/vendor/modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  
    moduleNameMapper: {
      '\\.(css|less)$': './__mocks__/styleMock.js',
      '\\.(gif|ttf|eot|svg)$': './__mocks__/fileMock.js',
  
      '^react(.*)$': './vendor/react-master$1',
      '^config$': './configs/app-config.js',
    },
  };