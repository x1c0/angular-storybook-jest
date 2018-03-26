module.exports = {
  globals: {
    __TRANSFORM_HTML__: true,
  },
  testRegex: '(\\.(test|spec))\\.(ts|js)$',
  setupTestFrameworkScriptFile: '<rootDir>/src/jest.ts',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node', '.html']
};

