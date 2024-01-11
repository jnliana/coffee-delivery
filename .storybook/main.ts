import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['../public'],
  features: { storyStoreV7: true }
};
export default config;
