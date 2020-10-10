exports.checkSizeOfCEP = (CepValue) => {
  const CepValueToCompare = CepValue;

  if(CepValueToCompare > 100000 && CepValueToCompare < 999999){
    return true;
  }

  return false;
};
