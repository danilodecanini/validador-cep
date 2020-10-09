const CEP = require("../models/CEP");

exports.addCEP = async (city, cep) => {

  if(city && cep){

    //Validação do CEP


    //Se todas as validações passarem criar CEP
    const cepCreated = await CEP.create({
      city,
      cep
    });

    return cepCreated;
  }

  return false;
};
