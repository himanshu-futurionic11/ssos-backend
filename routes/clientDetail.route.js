const express = require("express");
const { createClientDetails, getClientDetail, updateclientDetail } = require("../controller/clientDetail.controller");

const clientsDetailRoute = express.Router();

clientsDetailRoute.post("/add-clientDetail",createClientDetails);

clientsDetailRoute.get("/get-clientDetail", getClientDetail );
clientsDetailRoute.patch('/clientDetail/:id',updateclientDetail)

module.exports = clientsDetailRoute;
