const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)

config.transformer.getTransformOptions = async () => ({
  transform: {
    inlineRem: 16,
  },
});
 
module.exports = withNativeWind(config, { input: './global.css' })