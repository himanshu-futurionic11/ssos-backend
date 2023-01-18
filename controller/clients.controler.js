const {Clients} = require('../database')
const multer = require('multer')
const path = require('path')

exports.createClients = async(req,res) =>{
    try {
        let info = {
            imsrc: req.file.path,
            title: req.body.title,
            name: req.body.name,
        }
    const addClients = await   Clients.create(info) ;
    res.status(200).json(addClients) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'ClientImg')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.imageUpload = multer({
    storage: storage,
    limits: { Clientsize: '1000000' },
    fileFilter:(req, file, callback)=>{
        const fileTypes = /jpg|png|jpeg|gif/
        const fileMimeType = fileTypes.test(file.mimetype)
        const extName = fileTypes.test(path.extname(file.originalname   ))
  
        if(fileMimeType && extName){
            return callback(null, true)
        }
        callback(new Error('only .jpg, .png, .jpeg, .gif format allowed!'))
    }
}).single('file')

exports.getClients = async(req,res) =>{
    try {
    const getClients = await Clients.findAll() ;
    res.status(200).json(getClients) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}