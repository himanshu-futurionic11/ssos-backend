const {ClientLocations} = require('../database')

exports.createClientLocations = async(req,res) =>{
    try {
    const addClientLocations = await   ClientLocations.create(req.body) ;
    res.status(200).json(addClientLocations) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}


exports.getClientLocation = async(req,res) =>{
    const {clientId} = req.query;
    try {
    const getClientLocations = await ClientLocations.findAll({where:{clientId}}) ;
    res.status(200).json(getClientLocations) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}