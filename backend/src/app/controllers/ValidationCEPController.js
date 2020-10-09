const { findOneByCEP, findAll } = require("../repository/CEPRepository");
const { addCEP } = require("../services/CEPService");

exports.index = async (req, res) => {

 const ceps = await findAll();

 if(ceps[0]){
   return res.json({ status: 'success', message: 'Os dados foram carregados', data: ceps });
 }

  return res.json({ status: 'warning', message: 'Não foram encontrados nenhum CEP cadastrado!' });
};


exports.create = async (req, res) => {
  const { city, cep } = req.body;

  if(!city || !cep){
    return res.status('400').json({ status: 'error', message: 'O campo Cidade e CEP são obrigatórios'});
  }

  const cepAlreadyExists = await findOneByCEP(cep);

  if(!cepAlreadyExists){
    const cepCreated = addCEP(city, cep);

    if(cepCreated.status === 'success'){
      return res.status(201).json({ status: 'success', message: `CEP ${cep} adicionado com sucesso!`});
    } else {
      return res.status(400).json({ status: 'error', message: 'Erro de validação no CEP'});
    }
  }

  return res.status(400).json({ status: 'warning', message: 'O CEP informado já existe no banco de dados!' });
};
