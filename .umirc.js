
// ref: https://umijs.org/config/
import routes from "./config/router"
import theme from './config/theme.config'
import proxy from './config/proxy';

export default {
  history: 'hash',
  publicPath: './',
  treeShaking: true,
  routes,
  theme,
  alias: {
    '@': require('path').resolve(__dirname, './src'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'promo-web',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      links: [
        { rel: 'icon', href: '<%= PUBLIC_PATH %>static/favicon.ico' },
      ],
    }],
  ],
  cssLoaderOptions: {
    localIdentName: '[local]',
  },
  proxy: proxy[process.env.UMI_ENV || 'dev'],
  define: {
    'process.env.UMI_ENV': 'dev'
  }
}
