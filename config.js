const StyleDictionaryPackage = require("style-dictionary");

function getStyleDictionaryConfig(product, output) {
  return {
    source: [
      `tokens/products/${product}/*.json`,
      "tokens/globals/**/*.json",
      `tokens/outputs/${output}/*.json`,
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
  ["css", "js"].map(function (output) {
    console.log(`\n🔥 ${output} tokens → ${product}`);
    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(product, output)
    );
    StyleDictionary.buildPlatform(output);
    console.log("End processing");
  });
});

console.log("\n====================\n");
console.log("Build completed! 🎉");
