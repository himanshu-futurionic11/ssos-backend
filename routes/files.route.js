const express = require("express");
const { createFiles, getFilesByLocation, upload, getFilesBySearch,  getFilesByMonth, getFilesByYear, getFilesByFileType, getFilesByYearFileType, getFilesByMonthFileType, getFilesByYearMonth, putFilesClientId } = require("../controller/files.controler");
const filesRoute = express.Router();

filesRoute.post("/add-files",upload, createFiles);

filesRoute.get("/get-filesByLocation", getFilesByLocation);
filesRoute.get("/get-filesBySearch", getFilesBySearch);
filesRoute.get("/get-filesByMonth", getFilesByMonth);
filesRoute.get("/get-filesByYear", getFilesByYear);
filesRoute.get("/get-filesByFileType", getFilesByFileType);
filesRoute.get("/get-filesByYearFileType", getFilesByYearFileType);
filesRoute.get("/get-filesByMonthFileType", getFilesByMonthFileType);
filesRoute.get("/get-filesByYearMonth", getFilesByYearMonth);
filesRoute.put('/put-filesClientId',putFilesClientId);

module.exports = filesRoute;
