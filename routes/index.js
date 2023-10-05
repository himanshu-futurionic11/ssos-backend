const express = require('express');
const clientsRoute = require('./client.route');
const filesRoute = require("./files.route");
const clientsLocationRoute = require('./clientLocation.route');
const clientsDetailRoute = require('./clientDetail.route');

const appRouter = express.Router()
appRouter.use(filesRoute)
appRouter.use(clientsRoute)
appRouter.use(clientsLocationRoute)
appRouter.use(clientsDetailRoute)
module.exports = appRouter;