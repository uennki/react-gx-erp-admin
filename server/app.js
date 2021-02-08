const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router({ prefix: '/api' });

router.get('/hello', async (ctx, next) => {
  ctx.response.body = `hello world`;
  next();
});

app.use(router.routes());

app.listen(8090);
