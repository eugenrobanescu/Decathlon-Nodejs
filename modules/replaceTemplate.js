exports.athletes = (temp, el) => {
  let outPut = temp.replace(/{%FIRSTNAME%}/g, el.firstName);
  outPut = outPut.replace(/{%LASTNAME%}/g, el.lastName);
  outPut = outPut.replace(/{%EVENT%}/g, el.test);
  outPut = outPut.replace(/{%RESULT1%}/g, el.result1);
  outPut = outPut.replace(/{%RESULT2%}/g, el.result2);
  outPut = outPut.replace(/{%RESULT3%}/g, el.result3);
  if (el.test == "Long Jump") {
    outPut = outPut.replace(
      /{%IMG%}/g,
      '<img src="https://img.icons8.com/ios/50/000000/long-jump.png" />'
    );
    outPut = outPut.replace(/{%MEASURE%}/g, "m");
  } else if (el.test == "Running") {
    outPut = outPut.replace(
      /{%IMG%}/g,
      '<img src="https://img.icons8.com/ios-filled/50/000000/running.png">'
    );
    outPut = outPut.replace(/{%MEASURE%}/g, "s");
  } else if (el.test == "Pole Jump") {
    outPut = outPut.replace(
      /{%IMG%}/g,
      '<img src="https://img.icons8.com/dotty/80/000000/pole-vault.png">'
    );
    outPut = outPut.replace(/{%MEASURE%}/g, "m");
  } else if (el.test == "Shot Put") {
    outPut = outPut.replace(
      /{%IMG%}/g,
      '<img src="https://img.icons8.com/dotty/80/000000/shot-put.png">'
    );
    outPut = outPut.replace(/{%MEASURE%}/g, "m");
  } else if (el.test == "Swimming") {
    outPut = outPut.replace(
      /{%IMG%}/g,
      '<img src="https://img.icons8.com/dotty/80/000000/swimming.png">'
    );
    outPut = outPut.replace(/{%MEASURE%}/g, "s");
  }

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

exports.chart = (temp, el) => {
  let outPut = temp.replace(/{%R1%}/g, el.result1);
  outPut = outPut.replace(/{%R2%}/g, el.result2);
  outPut = outPut.replace(/{%R3%}/g, el.result3);
  outPut = outPut.replace(/{%EVENT%}/g, el.test);
  outPut = outPut.replace(/{%fname%}/g, el.firstName);
  outPut = outPut.replace(/{%lname%}/g, el.lastName);
  outPut = outPut.replace(/{%EV%}/g, el.test);
  outPut = outPut.replace(/{%ATH%}/g, el.firstName);

  if (
    el.test == "Long Jump" ||
    el.test == "Pole Jump" ||
    el.test == "Shot Put"
  ) {
    outPut = outPut.replace(/{%LABEL%}/g, "meters");
  } else {
    outPut = outPut.replace(/{%LABEL%}/g, "seconds");
  }
  return outPut;
};
