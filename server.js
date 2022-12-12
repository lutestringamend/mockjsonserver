const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({readOnly: true});
const port = process.env.PORT || 3000;

server.use(middlewares);

server.get('/', (req, res) => {
  res.send({ message: "Gnosis Validator Pools API v1"});
})

server.use(jsonServer.rewriter({
    '/api/v1/pubkey?q=:q': '/data?q=:q'
}));

router.render = (req, res) => {
  if (req.path === '/data') {
    if (res.locals.data.length > 1) {
      res.jsonp({
        status: "error",
        message: "Multiple results. Make sure pubkey is complete"
      });
    } else if (res.locals.data.length === 1) {
      res.jsonp({
        entity: res.locals.data[0].Label
      });
    } else {
      res.jsonp([
        { entity: null }
      ])
    }
  } else {
    res.status(500);
  }
}

server.use(router);
server.listen(port);
