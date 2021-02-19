const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const options = {
    target: 'http://localhost:8090',
    changeOrigin: true,
    // pathRewrite: { '^/api': '' },
  };
  app.use(createProxyMiddleware('/api/**', options));
};
