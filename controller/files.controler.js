const {Files} = require('../database')
const multer = require('multer')
const path = require('path')

exports.createFiles = async(req,res) =>{
    try {
        let info = {
            file: req.file.path,
            location: req.body.location,
            fileType: req.body.fileType,
            month: req.body.month,
            year: req.body.year,
            name: req.body.name ,
        }
    const addFiles = await   Files.create(info) ;
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
    // fileFilter: (req, file, cb) => {
    //     const fileTypes = /pdf|xlsx/
    //     const mimeType = fileTypes.test(file.mimetype)
    //     const extname = fileTypes.test(path.extname(file.originalname))
        
    //     if (file.mimetype === 'vnd.openxmlformats-officedocument.spreadsheetml.sheet') {   
    //         return cb(null, true)      
    //     }
    //     else{      
    //         if(mimeType && extname) {
    //             return cb(null, true)
    //         }
    //         cb('Give proper files formate to upload')
    //     }
    // }
}).single('file')

exports.getFilesByLocation = async(req,res) =>{
    const {location} = req.query;
    try {
    const getFiles = await   Files.findAll({where:{location}}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getFilesByYear = async(req,res) =>{
    const {location,year} = req.query;
    try {
    const getFiles = await   Files.findAll({where:{location,year}}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getFilesByFileType = async(req,res) =>{
    const {location,fileType} = req.query;
    try {
    const getFiles = await   Files.findAll({where:{location,fileType}}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getFilesByYearFileType = async(req,res) =>{
    const {location,fileType,year} = req.query;
    try {
    const getFiles = await   Files.findAll({where:{location,fileType,year}}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getFilesByMonthFileType = async(req,res) =>{
    const {location,fileType,month} = req.query;
    try {
    const getFiles = await   Files.findAll({where:{location,fileType,month}}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getFilesByYearMonth = async(req,res) =>{
    const {location,year,month} = req.query;
    try {
    const getFiles = await   Files.findAll({where:{location,year,month}}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getFilesBySearch = async(req,res) =>{
    const {location,fileType,year,month} = req.query;
    try {
    const getFiles = await   Files.findAll({where:{location,fileType,year,month}}) ;
    res.status(200).json(getFiles) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getFilesByMonth = async(req,res) =>{
    const {location,month} = req.query;
    console.log(req);
        try {
            const getFiles = await   Files.findAll({where:{location,month}}) ;
            res.status(200).json(getFiles) 
    
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
