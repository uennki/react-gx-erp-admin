const Koa = require('koa');
const Router = require('koa-router');
const Mock = require('mockjs');

const app = new Koa();
const router = new Router({ prefix: '/api' });

router.get('/hello', async (ctx, next) => {
  ctx.response.body = Mock.mock({
    status: 200,
    'data|1-9': [
      {
        'name|5-8': /[a-zA-Z]/,
        'id|+1': 1,
        'value|0-500': 20,
      },
    ],
  });
  next();
});

app.use(router.routes());
app.listen(8090);
