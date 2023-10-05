const express = require("express");
const { createFiles,  upload, getFilesBySearch,  } = require("../controller/files.controler");
const filesRoute = express.Router();

filesRoute.post("/add-files",upload, createFiles);


filesRoute.get("/get-filesBySearch", getFilesBySearch);

module.exports = filesRoute;
