exports.sanitizeCEP = (originalCepValue) => {
  const sanitizedCepValue = originalCepValue.toString().replace(/\D/g, '');
  return Number(sanitizedCepValue);
};
