const CEP = require("../models/CEP");

exports.addCEP = async (city, cep) => {

  if(city && cep){
    const cepCreated = await CEP.create({
      city,
      cep
    });

    return cepCreated;
  }

  return false;
};
