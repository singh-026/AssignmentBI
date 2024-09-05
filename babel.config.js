module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
    },
  },
  // plugins: [
  //   [
  //     'module-resolver',
  //     {
  //       root: ['./src'],
  //       extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
  //       alias: {
  //         tests: ['./tests/'],
  //         '@components': './src/components/index.ts',
  //       },
  //     },
  //   ],
  // ],
};
