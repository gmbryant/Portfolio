function getCriteria() {
  let text1;
  let c1 = true;
  let criteria1 = prompt("Include lowercase letters, Y or N?", "Y");
  switch (criteria1.toUpperCase()) {
    case "Y":
      c1 = true;
      text1 = "Lower Case is Required";
      break;
    case "N":
      c1 = false;
      text1 = "Lower Case is not Required";
      break;
    default:
      return;
  }
  let text2;
  let c2 = true;
  let criteria2 = prompt("Include uppercase letters?", "Y");
  switch (criteria2.toUpperCase()) {
    case "Y":
      c2 = true;
      text2 = "Upper Case is Required";
      break;
    case "N":
      c2 = false;
      text2 = "Upper Case is not Required";
      break;
    default:
      return;
  }
  let text3;
  let c3 = true;
  let criteria3 = prompt("Include numbers", "Y");
  switch (criteria3.toUpperCase()) {
    case "Y":
      c3 = true;
      text3 = "A Number is Required";
      break;
    case "N":
      c3 = false;
      text3 = "A Number is not Required";
      break;
    default:
      return;
  }
  let text4;
  let c4 = true;
  let criteria4 = prompt("Include symbols?", "Y");
  switch (criteria4.toUpperCase()) {
    case "Y":
      c4 = true;
      text4 = "Symbol is Required";
      break;
    case "N":
      c4 = false;
      text4 = "Symbol is not Required";
      break;
    default:
      text4 = "Symbol is Required";
  }

  const typesCount = c1 + c2 + c3 + c4;
  let length = prompt("Password Length - miniumum of " + typesCount);

  randomResult.value = randomPassword(
    c1,
    c2,
    c3,
    c4,
    length
  );
}

function randomPassword(c1, c2, c3, c4, length) {
  let password = "";
  const Func = {
    c1: getRandomLower,
    c2: getRandomUpper,
    c3: getRandomNumber,
    c4: getRandomSymbol
  };

  const typesCount = c1 + c2 + c3 + c4;
  const typesArray = [{ c1 }, { c2 }, { c3 }, { c4 }].filter
    (item => Object.values(item)[0]);
  console.log('typesArray: ', typesArray);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      password += Func[funcName]();
    });
  }

  const returnPassword = password.slice(0, length);
  console.log(returnPassword);
  return returnPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

