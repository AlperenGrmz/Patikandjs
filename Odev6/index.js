const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(ctx => {
  const url = ctx.url
  if(url === '/'){
    ctx.body = '<h1>INDEX SAYFASI</h1>';
  }
  else if (url === '/hakkimda'){
    ctx.body = '<h1>HAKKIMDA SAYFASI</h1>';
  }
  else if (url === '/iletisim'){
    ctx.body = '<h1>ILETISIM SAYFASI</h1>';
  }
  else{
    ctx.status = 404;
    ctx.body = '<h1>404</h1>'
  }
});

app.listen(port, () => console.log(`port ${port} de calisiyor...`));
