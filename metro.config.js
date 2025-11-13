const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const svgTransformer = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  
  resolver: {
    assetExts: ['bin', 'txt', 'jpg', 'png', 'ttf', 'otf', 'mp4', 'webm'].filter(ext => ext !== 'svg'),
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'],
  },
};

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), {
  ...config,
  ...svgTransformer,
});