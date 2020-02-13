exports.athletes = (temp, el) => {
  let outPut = temp.replace(/{%FIRSTNAME%}/g, el.firstName);
  outPut = outPut.replace(/{%LASTNAME%}/g, el.lastName);
  outPut = outPut.replace(/{%TEST%}/g, el.test);
  outPut = outPut.replace(/{%RESULT1%}/g, el.result1);
  outPut = outPut.replace(/{%RESULT2%}/g, el.result2);
  outPut = outPut.replace(/{%RESULT3%}/g, el.result3);

  return outPut;
};
exports.tests = (temp, el) => {
  let outPut = temp.replace(/{%NAME%}/g, el.name);
  outPut = outPut.replace(/{%DESCRIPTION%}/g, el.description);
  outPut = outPut.replace(/{%RECORDRESULT%}/g, el.recordResult);
  outPut = outPut.replace(/{%RECORDDATE%}/g, el.recordDate);
  outPut = outPut.replace(/{%RECORDPERSON%}/g, el.recordPerson);

  return outPut;
};
