const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Add shims for Node.js modules
  config.resolver.extraNodeModules = {
    crypto: require.resolve("react-native-crypto"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
  };

  return config;
})();
