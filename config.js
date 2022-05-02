const StyleDictionaryPackage = require("style-dictionary");

function getStyleDictionaryConfig(product, platform) {
  return {
    source: [
      `tokens/products/${product}/*.json`,
      "tokens/globals/**/*.json",
      `tokens/platforms/${platform}/*.json`,
    ],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: `build/web/${product}/`,
        files: [
          {
            destination: "tokens.css",
            format: "css/variables",
          },
        ],
      },
      js: {
        transformGroup: "js",
        buildPath: `build/web/${product}/`,
        files: [
          {
            destination: "tokens.js",
            format: "javascript/es6",
          },
        ],
      },
    },
  };
}

console.log("Build started...");
console.log("\n====================");

["taikai", "bepro", "dappkit"].map(function (product) {
  ["css", "js"].map(function (platform) {
    console.log(`\n🔥 ${platform} tokens → ${product}`);
    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(product, platform)
    );
    StyleDictionary.buildPlatform(platform);
    console.log("End processing");
  });
});

console.log("\n====================\n");
console.log("Build completed! 🎉");
