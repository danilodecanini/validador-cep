const CEP = require('../models/CEP');

exports.findAll = async () => {
  const cepsFromDB = await CEP.find({});

  if(cepsFromDB){
    return cepsFromDB;
  }

  return false;
};

exports.findOneByCEP = async (cep) => {
  const cepFromDB = await CEP.findOne({ cep }).exec();

  if(cepFromDB){
    return cepFromDB;
  }

  return false;
};
