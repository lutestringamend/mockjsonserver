const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const completeRouter = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({readOnly: true});
const port = process.env.PORT || 3000;

server.use(middlewares);

server.get('/', (req, res) => {
  res.send({ message: "Gnosis Validator Pools API v1"});
})

server.get('/api', (req, res) => {
  res.send({ message: "Gnosis Validator Pools API v1"});
})

server.use(jsonServer.rewriter({
    '/api/v1/pubkey?q=:q': '/api/v1/data?q=:q'
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
      res.jsonp({
         entity: null 
      })
    }
  } else {
    res.jsonp({
      status: "error",
      message: "404"
    });
  }
}

completeRouter.render = (req, res) => {
  if (req.path === '/data') {
    res.jsonp({
      data: res.locals.data
    });
  } else {
    res.jsonp({
      status: "error",
      message: "404"
    });
  }
}

server.use('/api/v1', router);
server.use('/api/complete', completeRouter);
server.listen(port);
