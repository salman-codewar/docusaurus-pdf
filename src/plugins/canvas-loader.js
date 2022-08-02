module.exports = function () {
  return {
    name: "canvas-loader",
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /canvas/,
              use: "null-loader",
            },
          ],
        },
      };
    },
  };
};
