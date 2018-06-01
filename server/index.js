const jsonServer = require('json-server')
const server = jsonServer.create()


var data = require('./data.json');


const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('seller', (req, res) => {
  res.jsonp( req.query)
})


// Use default router
// server.use('/api' , router)
server.use( router)
server.listen(3000, () => {
  console.log('JSON Server is running  \n http://localhost:3000')
})
