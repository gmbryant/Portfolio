function getCriteria() {
  let length = 0;
  let c1 = true, c2 = true, c3 = true, c4 = true;
  let criteria1 = "";
  let criteria2 = "";
  let criteria3 = "";
  let criteria4 = "";
  let verifyCount = 0;

  do {
    length = prompt("Password Length - between 8 and 128");
    if (length == null) { return; }
    if (isNaN(length)) {
      alert("Input is not a number; Enter a Value Between 8 and 128");
    }
    else {
      if (length < 8 || length > 128) {
        alert("Length Must be Between 8 and 128");
      }
    }
  } while (length < 8 || length > 128 || isNaN(length));

  do {
    criteria1 = prompt("Include lowercase letters, Y or N?", "Y");
    switch (criteria1.toUpperCase()) {
      case "Y":
        c1 = true;
        break;
      case "N":
        c1 = false;
        break;
      case null:
        return;
      default:
        c1 = true;
    }

    criteria2 = prompt("Include uppercase letters?", "Y");
    switch (criteria2.toUpperCase()) {
      case "Y":
        c2 = true;
        break;
      case "N":
        c2 = false;
        break;
      case null:
        return;
      default:
        c2 = true;
    }

    criteria3 = prompt("Include numbers?", "Y");
    switch (criteria3.toUpperCase()) {
      case "Y":
        c3 = true;
        break;
      case "N":
        c3 = false;
        break;
      case null:
        return;
      default:
        c3 = true;
    }

    criteria4 = prompt("Include symbols?", "Y");
    switch (criteria4.toUpperCase()) {
      case "Y":
        c4 = true;
        break;
      case "N":
        c4 = false;
        break;
      case null:
        return;
      default:
        c4 = true;
    }

    verifyCount = c1 + c2 + c3 + c4;
    if (verifyCount === 0) {
      alert("You Must include at Least One Type of Character - Try Again");
    }
  } while (verifyCount < 1);

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

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      password += Func[funcName]();
    });
  }

  const returnPassword = password.slice(0, length);
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

