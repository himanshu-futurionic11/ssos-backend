const express = require('express');
const clientsRoute = require('./client.route');
const filesRoute = require("./files.route");

const appRouter = express.Router()
appRouter.use(filesRoute)
appRouter.use(clientsRoute)
module.exports = appRouter;