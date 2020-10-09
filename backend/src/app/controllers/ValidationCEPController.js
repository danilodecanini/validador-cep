const { findOneByCEP } = require("../repository/CEPRepository");
const { addCEP } = require("../services/CEPService");

exports.create = async (req, res) => {
  const { city, cep } = req.body;

  if(!city || !cep){
    return res.status('400').json({ status: 'error', message: 'O campo Cidade e CEP são obrigatórios'});
  }

  const cepAlreadyExists = await findOneByCEP(cep);

  if(!cepAlreadyExists){
    const cepCreated = addCEP(city, cep);

    if(cepCreated){
      return res.status(201).json({ status: 'success', message: `CEP ${cep} adicionado com sucesso!`});
    }
  }

  return res.json({ status: 'warning', message: 'O CEP informado já existe no banco de dados!' });
};
