module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// module.exports = {
//   presets: [['module:metro-react-native-babel-preset'], { useTransformReactJSXExperimental: true }],
//   plugins: [
//     'transform-inline-environment-variables',
//     [
//       '@babel/plugin-transform-react-jsx',
//       {
//         runtime: 'automatic',
//       },
//     ],
//     [
//       'module-resolver',
//       {
//         root: ['./app'],
//         extensions: ['.js', '.ts', '.jsx', '.tsx', '.png', '.ios.js', '.android.js'],
//         alias: {
//           app: './app',
//           assets: './app/assets',
//           components: './app/components',
//           constants: './app/constants',
//           hooks: './app/hooks',
//           navigation: './app/navigation',
//           screens: './app/screens',
//         },
//       },
//     ],
//   ],
//   env: {
//     test: {
//       plugins: ['babel-plugin-dynamic-import-node'],
//     },
//   },
// };
