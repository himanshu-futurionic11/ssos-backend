const express = require("express");
const { createClientDetails, getClientDetail } = require("../controller/clientDetail.controller");

const clientsDetailRoute = express.Router();

clientsDetailRoute.post("/add-clientDetail",createClientDetails);

clientsDetailRoute.get("/get-clientDetail", getClientDetail );

module.exports = clientsDetailRoute;
