const express = require("express");
const { getClients, upload, createClients,updateClients } = require("../controller/clients.controler");

const clientsRoute = express.Router();

clientsRoute.post("/add-client",upload, createClients);

clientsRoute.get("/get-clients", getClients);
clientsRoute.put("/update-clients",updateClients );

module.exports = clientsRoute;
