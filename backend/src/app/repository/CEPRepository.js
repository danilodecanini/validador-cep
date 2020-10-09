const CEP = require('../models/CEP');

exports.findOneByCEP = async (cep) => {
  const cepFromDB = await CEP.findOne({ cep }).exec();

  if(cepFromDB){
    return cepFromDB;
  }

  return false;
};
