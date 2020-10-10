const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { sanitizeCEP } = require("../../src/app/validations/CEP/sanitizeCEP");
const { checkSizeOfCEP } = require("../../src/app/validations/CEP/checkSizeOfCEP");
const { matchPattern } = require("../../src/app/validations/CEP/matchPattern");

describe('CEP Validation', () => {

  it('should return a sanitize cep value (remove special characters, words and return number)', async () => {
    let originalValue = '854.785';
    let sanitizedValue = sanitizeCEP(originalValue);

    expect(sanitizedValue).toEqual(854785);
  });

  it('should return true if check size of cep value is greater then 100.000', async () => {
    let originalValue = 854785;
    let isGreaterThen = checkSizeOfCEP(originalValue);

    expect(isGreaterThen).toBeTruthy();
  });

  it('should return true if check size of cep value is less then 999999', async () => {
    let originalValue = 154785;
    let isLessThen = checkSizeOfCEP(originalValue);

    expect(isLessThen).toBeTruthy();
  });

  it('should return false if check size of cep value is less then 999999', async () => {
    let originalValue = 8547853;
    let isLessThen = checkSizeOfCEP(originalValue);

    expect(isLessThen).toBeFalsy();
  });

  it('should return true if CEP match the pattern', async () => {
    let originalValue = 854785;
    let matchPatternValue = matchPattern(originalValue);

    expect(matchPatternValue).toBeTruthy();
  });

  it('should return false if CEP doenst match the pattern', async () => {
    let originalValue = 818575;
    let matchPatternValue = matchPattern(originalValue);

    expect(matchPatternValue).toBeFalsy();
  });
})
