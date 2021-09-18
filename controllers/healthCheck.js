const healthCheckRouter = require('express').Router()

healthCheckRouter.get('/', (req, res) => {
  res.send('ok')
})

healthCheckRouter.get('/version', (req, res) => {
  res.send('1.0')
})

module.exports = healthCheckRouter
