const { PaymentFiles } = require("../database");
const multer = require("multer");
const path = require("path");

exports.createFiles = async (req, res) => {
  try {
    let info = {
      file: req.file.path,
      clientId: req.body.clientId,
      location: req.body.location,
      fileType: req.body.fileType,
      month: req.body.month,
      year: req.body.year,
      name: req.body.name,
    };
    const addFiles = await PaymentFiles.create(info);
    res.status(200).json(addFiles);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.message });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
}).single("file");

exports.getFilesBySearch = async (req, res) => {
  const { clientId, location, fileType, year, month } = req.query;
  try {
  if (month) {
    if (year) {
      if (fileType) {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location, fileType, year, month },
        });
        res.status(200).json(getFiles);
      } else {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location, year, month },
        });
        res.status(200).json(getFiles);
      }
    } else {
      if (fileType) {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location, fileType, month },
        });
        res.status(200).json(getFiles);
      } else {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location, month },
        });
        res.status(200).json(getFiles);
      }
    }
  } else {
    if (year) {
      if (fileType) {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location, fileType, year },
        });
        res.status(200).json(getFiles);
      } else {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location, year },
        });
        res.status(200).json(getFiles);
      }
    } else {
      if (fileType) {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location, fileType },
        });
        res.status(200).json(getFiles);
      } else {
        const getFiles = await PaymentFiles.findAll({
          where: { clientId, location },
        });
        res.status(200).json(getFiles);
      }
    }
  }
  
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.message });
  }
};
