const {PaymentFiles} = require('../database')
const multer = require('multer')
const path = require('path')
const pick = require('../utils/pick')

exports.createFiles = async(req,res) =>{
    try {
        let info = {
            file: req.file.path,
            clientId: req.body.clientId,
            location: req.body.location,
            fileType: req.body.fileType,
            month: req.body.month,
            year: req.body.year,
            name: req.body.name ,
        }
    const addFiles = await   PaymentFiles.create(info) ;
    res.status(200).json(addFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
}).single('file')


exports.getFilesBySearch = async(req,res) =>{
    const filter =pick(req.query,["clientId","location","fileType","year","month"])
    try {
    const getFiles = await   PaymentFiles.findAll({where:filter}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
