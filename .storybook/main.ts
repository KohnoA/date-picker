import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }

    const fileLoaderRule = config.module?.rules?.find(
      (rule) => rule !== '...' && rule && rule.test instanceof RegExp && rule.test.test('.svg'),
    );
    if (fileLoaderRule && fileLoaderRule !== '...') {
      fileLoaderRule.exclude = /\.svg$/;
    }
    config.module?.rules?.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: {
        loader: require.resolve('@svgr/webpack'),
      },
    });

    return config;
  },
};
export default config;
