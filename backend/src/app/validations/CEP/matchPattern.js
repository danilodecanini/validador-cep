exports.matchPattern = (CepValue) => {
  let Cep = CepValue.toString();

  if(Cep[0] !== Cep[2] && Cep[1] !== Cep[3] && Cep[2] !== Cep[4] && Cep[3] !== Cep[5]) {
    return true;
  }

  return false;
};
