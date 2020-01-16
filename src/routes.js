const { Router } = require('express')

const ExtractController = require('./app/ExtractController')

const routes = new Router()

routes.get('/extract/:cfeKey', ExtractController.index)

module.exports = routes