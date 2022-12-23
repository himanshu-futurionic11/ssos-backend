const express = require('express');
const filesRoute = require("./files.route");

const appRouter = express.Router()
appRouter.use(filesRoute)
module.exports = appRouter;