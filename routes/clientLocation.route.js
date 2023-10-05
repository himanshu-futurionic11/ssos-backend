const express = require("express");
const { createClientLocations, getClientLocation } = require("../controller/clientLocation.controller");

const clientsLocationRoute = express.Router();

clientsLocationRoute.post("/add-clientLocation",createClientLocations);

clientsLocationRoute.get("/get-clientLocation", getClientLocation );

module.exports = clientsLocationRoute;
