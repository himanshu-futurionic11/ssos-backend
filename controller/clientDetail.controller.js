const {ClientDetails} = require('../database')

exports.createClientDetails = async(req,res) =>{
    try {
    const addClientDetails = await ClientDetails.create(req.body) ;
    res.status(200).json(addClientDetails) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}


exports.getClientDetail = async(req,res) =>{
    const {clientId,clientLocationId} = req.query;
    try {
    const getClientDetails = await ClientDetails.findAll({where:{clientId,clientLocationId}}) ;
    res.status(200).json(getClientDetails) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}


exports.updateclientDetail = async (req, res) => {
    const {heading,detail} = req.body
    const clientDetailId =req.params.id
    const updateClientDetail = await ClientDetails.update(
      {heading,detail},
      {where:{id:clientDetailId}}
    );
    // console.log(updateClientDetail);
    
    if (!updateClientDetail) {
      throw new ApiError(httpStatus.NOT_FOUND, "Client Detail Not Found");
    }
    res.status(200).json(updateClientDetail) 
  };