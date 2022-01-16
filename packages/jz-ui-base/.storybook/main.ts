const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-jest",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-essentials",
    "storybook-addon-themes",
  ],
  framework: "@storybook/react",
  webpackFinal(config) {
    delete config.resolve.alias["emotion-theming"];
    delete config.resolve.alias["@emotion/styled"];
    delete config.resolve.alias["@emotion/core"];

    config.optimization.minimize = process.env.NODE_ENV === "production";
    config.optimization.minimizer = [
      new TerserPlugin({
        parallel: 2,
      }),
    ];

    return config;
  },
};
