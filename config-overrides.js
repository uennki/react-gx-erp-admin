const { override, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

/* 关闭打包后产生的 sourcemap 等文件 */
process.env.GENERATE_SOURCEMAP = 'false';

module.exports = override(
  /* 添加别名 */
  addWebpackAlias({
    ['components']: path.resolve(__dirname, 'src/components'),
  }),

  /* 添加less配置 */
  addLessLoader({
    javascriptEnabled: true,
    sourceMap: false,
    modifyVars: { '@primary-color': '#16a951' },
    cssModules: {
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    },
  })
);
