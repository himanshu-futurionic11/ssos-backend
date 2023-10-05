const {Clients} = require("../database");
const multer = require("multer");
const path = require("path");

exports.createClients = async (req, res) => {
  try {
    let info = {
      imsrc: req.file.path,
      title: req.body.title,
      name: req.body.name,
      userName: req.body.userName,
      password: req.body.password,
    };
    const addClients = await Clients.create(info);
    res.status(200).json(addClients);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.message });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "ClientImg");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, callback) => {
    const fileTypes = /jpg|png|jpeg|gif/;
    console.log("hi", req);
    console.log(file);
    console.log();
    console.log();
    const fileMimeType = fileTypes.test(file.mimetype);
    const extName = fileTypes.test(path.extname(file.originalname));

    if (fileMimeType && extName) {
      return callback(null, true);
    }
    callback(new Error("only .jpg, .png, .jpeg, .gif format allowed!"));
  },
}).single("imsrc");

exports.getClients = async (req, res) => {
  try {
    const getClients = await Clients.findAll();
    res.status(200).json(getClients);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.message });
  }
};
exports.updateClients = async (req, res) => {
  const { id, userName, password } = req.query;
  console.log(userName);
  try {
    const getClients = await Clients.update(
      { userName, password },
      { where: {id} }
    );
    res.status(200).json(getClients);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.message });
  }
};
