// Event listeners for button clicks to navigate through questions
document.getElementById("start").addEventListener("click", startQuiz)
document.getElementById("highScores").addEventListener("click", showHS)
let correct = 0;
let answer = '';
let previousValue = '';

// start quiz by starting timer and displaying question one
function startQuiz() {
  document.getElementById("question1").hidden = false;
  document.getElementById("question2").hidden = true;
  document.getElementById("question3").hidden = true;
  document.getElementById("question4").hidden = true;
  document.getElementById("allDone").hidden = true;
  document.getElementById("openQuiz").hidden = true;
  document.getElementById("highScores").hidden = true;
  document.getElementById("showScore").hidden = true;
  myTime = setInterval(myCounter, 1000);
}

function showHS() {
  previousValue = localStorage.getItem("scores");
  document.getElementById("scores").innerHTML = previousValue;
  document.getElementById("showScore").hidden = false;
}

function question2() {
  answer = document.forms["form1"]["sql_read"].value;
  if (answer == "Fetch") {
    correct++;
  };
  document.getElementById("question1").hidden = true;
  document.getElementById("question2").hidden = false;
}

function question3() {
  answer = document.forms["form2"]["entry_plist"].value;
  if (answer == "PI") {
    correct++;
  };
  document.getElementById("question2").hidden = true;
  document.getElementById("question3").hidden = false;
}

function question4() {
  answer = document.forms["form3"]["forloop"].value;
  if (answer == "1") {
    correct++;
  };
  document.getElementById("question3").hidden = true;
  document.getElementById("question4").hidden = false;
}

function allDone() {
  document.getElementById("question4").hidden = true;
  clearInterval(myTime);
  answer = document.forms["form4"]["moduletf"].value;
  if (answer == "ModFalse") {
    correct++;
  };
  document.getElementById("yourScore").innerHTML = "Your Score is: " + correct;
  document.getElementById("seconds").innerHTML = "Time: 0";
  document.getElementById("allDone").hidden = false;
}

let cnt = 60;
function myCounter() {
  document.getElementById("seconds").innerHTML = "Time: " + cnt--;
  console.log(cnt);
  if (cnt < 0) {
    clearInterval(myTime);
    document.getElementById("question1").hidden = true;
    document.getElementById("question2").hidden = true;
    document.getElementById("question3").hidden = true;
    document.getElementById("question4").hidden = true;
    document.getElementById("finished").innerHTML = "Time Expired";
    document.getElementById("allDone").hidden = false;
  }
}

function saveScore() {
  // determine if answers are correct
  document.getElementById("allDone").hidden = true;
  let myName = document.forms["nameform"]["yourname"].value;
  let savHigh = myName + ': ' + correct;
  previousValue = localStorage.getItem("scores");
  let scorePos = 0;
  let previousScore = 0;
  scorePos = previousValue.indexOf(":");
  if (scorePos > 0) {
    previousScore = previousValue.substring(scorePos + 2, scorePos + 3);
    console.log(scorePos);
  }
  console.log(previousScore);
  console.log(previousValue);
  if (correct >= previousScore) {
    localStorage.setItem("scores", savHigh);
    document.getElementById("scores").innerHTML = savHigh;
  } else {
    document.getElementById("scores").innerHTML = previousValue;
  }

  document.getElementById("highScores").hidden = false;
  document.getElementById("showScore").hidden = false;

}