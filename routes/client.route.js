const express = require("express");
const { getClients, imageUpload, createClients } = require("../controller/clients.controler");

const clientsRoute = express.Router();

clientsRoute.post("/add-client",imageUpload, createClients);

clientsRoute.get("/get-clients", getClients);

module.exports = clientsRoute;
