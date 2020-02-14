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
  outPut = outPut.replace(/{%RP%}/g, el.recordPerson);
  outPut = outPut.replace(/{%RR%}/g, el.recordResult);
  outPut = outPut.replace(/{%RD%}/g, el.recordDate);
  outPut = outPut.replace(/{%DESCRIPTION%}/g, el.description);

  return outPut;
};
