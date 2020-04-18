// Created by: Joshua C. Magoliman
var firstGivenNumber = "", secondGivenNumber = "", arithmeticOperator = "", isAnswerAlreadyDisplayed = false;
function puttingCommas(param_Value) {
  return param_Value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function removingCommas(param_Value) {
  return parseFloat(param_Value.replace(/,/g, ''));
}
function otherButtonsFunction(param_Value) {
  console.log(document.getElementById('numbersDisplay').innerHTML.length);
  if (document.getElementById('numbersDisplay').innerHTML.length != 10) {
    if (param_Value == "=") {
      if ((firstGivenNumber != "") && (secondGivenNumber != "")) {
        calculate();
      }
    }
    else {
      if (arithmeticOperator == "") {
        firstGivenNumber = firstGivenNumber + param_Value;
        document.getElementById('numbersDisplay').innerHTML = removingCommas(firstGivenNumber);
        document.getElementById('numbersDisplay').innerHTML = puttingCommas(firstGivenNumber);
      }
      else {
        secondGivenNumber = secondGivenNumber + param_Value;
        document.getElementById('numbersDisplay').innerHTML = removingCommas(secondGivenNumber);
        document.getElementById('numbersDisplay').innerHTML = puttingCommas(secondGivenNumber);
      }
    }
  }
  if ((param_Value == "+") || (param_Value == "-") || (param_Value == "x") || (param_Value == "/")) {
    if ((firstGivenNumber != "") && (secondGivenNumber == "")) {
      arithmeticOperator = param_Value;
      document.getElementById('numbersDisplay').innerHTML = arithmeticOperator;
    }
    else if ((firstGivenNumber != "") && (secondGivenNumber != "")) {
      calculate();
      arithmeticOperator = param_Value;
      document.getElementById('numbersDisplay').innerHTML = firstGivenNumber + arithmeticOperator;
    }
  }
}
function calculate() {
  var firstGivenNumberWithoutCommas = "", secondGivenNumberWithoutCommas = "";
  firstGivenNumberWithoutCommas = removingCommas(firstGivenNumber);
  secondGivenNumberWithoutCommas = removingCommas(secondGivenNumber);
  switch (arithmeticOperator) {
    case '+':
      firstGivenNumberWithoutCommas = String(Number(firstGivenNumberWithoutCommas) + Number(secondGivenNumberWithoutCommas))
      displayTheAnswer(firstGivenNumberWithoutCommas);
      break;
    case '-':
      firstGivenNumberWithoutCommas = String(Number(firstGivenNumberWithoutCommas) - Number(secondGivenNumberWithoutCommas))
      displayTheAnswer(firstGivenNumberWithoutCommas);
      break;
    case 'x':
      firstGivenNumberWithoutCommas = String(Number(firstGivenNumberWithoutCommas) * Number(secondGivenNumberWithoutCommas))
      displayTheAnswer(firstGivenNumberWithoutCommas);
      break;
    case '/':
      if (secondGivenNumber == '0') {
        document.getElementById('numbersDisplay').innerHTML = "0";
        firstGivenNumber = ""; secondGivenNumber = "";
        break;
      }
      else {
        firstGivenNumberWithoutCommas = String(Number(firstGivenNumberWithoutCommas) / Number(secondGivenNumberWithoutCommas))
        displayTheAnswer(firstGivenNumberWithoutCommas);
        break;
      }
  }
}
function displayTheAnswer(param_AnswerWithoutCommas) {
  document.getElementById('numbersDisplay').innerHTML = puttingCommas(param_AnswerWithoutCommas);
  secondGivenNumber = ""; arithmeticOperator = ""; isAnswerAlreadyDisplayed = true;
}
function clearAndDeleteFunction(param_Value) {
  switch (param_Value) {
    case 'clear':
      location.reload();
      break;
    case 'delete':
      if (document.getElementById('numbersDisplay').innerHTML.length != 1) {
        if (secondGivenNumber != "") {
          {
            var secondArray = new Array();
            secondArray = secondGivenNumber.split("");
            secondArray.pop();
            secondGivenNumber = secondArray.join("");
            document.getElementById("numbersDisplay").innerHTML = puttingCommas(secondGivenNumber);
          }
        }
        else if ((firstGivenNumber != "") && (arithmeticOperator == "") && (isAnswerAlreadyDisplayed == false)) {
          var firstArray = new Array();
          firstArray = firstGivenNumber.split("");
          firstArray.pop();
          firstGivenNumber = firstArray.join("");
          document.getElementById("numbersDisplay").innerHTML = puttingCommas(firstGivenNumber);
        }
        else if ((firstGivenNumber != "") && (arithmeticOperator == "") && (isAnswerAlreadyDisplayed == true)) {
          resetAll();
        }
      }
      else {
        resetAll();
      }
  }
}
function resetAll() {
  document.getElementById('numbersDisplay').innerHTML = "0";
  firstGivenNumber = ""; secondGivenNumber = ""; arithmeticOperator = ""; isAnswerAlreadyDisplayed = false;
}