const CEP = require("../models/CEP");
const { checkSizeOfCEP } = require("../validations/CEP/checkSizeOfCEP");
const { matchPattern } = require("../validations/CEP/matchPattern");
const { sanitizeCEP } = require("../validations/CEP/sanitizeCEP");

exports.addCEP = async (city, cep) => {

  if(city && cep){

    let isValidCEP = false;
    let sanitezedValue = sanitizeCEP(cep);

    if(checkSizeOfCEP(sanitezedValue) && matchPattern(sanitezedValue)){
      isValidCEP = true;
    }

    if(isValidCEP){
      const cepCreated = await CEP.create({
        city,
        cep
      });

      if(cepCreated){
        return {
          status: 'success',
          data: cepCreated
        };
      }
    }

    return false;

  }

  return false;
};
