import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (nextConfig) => {
    if (nextConfig.resolve?.alias) {
      nextConfig.resolve.modules = [
        path.resolve(__dirname, '..'),
        'node_modules',
      ],
      nextConfig.resolve.alias = {
        ...nextConfig.resolve.alias,
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/constants': path.resolve(__dirname, '../src/constants'),
        '@/icons': path.resolve(__dirname, '../src/icons'),
        '@/styles': path.resolve(__dirname, '../src/styles'),
      }
    }

    return nextConfig;
  }
};
export default config;
