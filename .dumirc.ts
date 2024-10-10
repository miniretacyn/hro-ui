import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/hro-ui',
  publicPath: '/hro-ui/',
  themeConfig: {
    name: 'hro-ui',
  },
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
});
