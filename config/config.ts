import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  reactQuery: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'http://81.68.168.90:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
