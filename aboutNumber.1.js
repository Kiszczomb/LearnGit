
//First: variables
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//Second: functions
function getDividers(num) {
  let dividers = []
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      dividers.push(i)
    }
  }
  //console.log("Dzielniki liczby " + num + " to: " + dividers)
  //console.log("Jest ich " + dividers.length)
  return dividers;
}

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }

  }
  return true;
}

function aboutNumber(num) {

}

//Third: input

var recursiveAsyncReadLine = function () {
  rl.question("\nPodaj liczbę do sprawdzenia jej cech: ", function (num) {
    if (isNaN(num)) {
      console.log('To nie jest numer')
    } else {
      if (isPrime(num) == true) {
        console.log(num + ' to liczba pierwsza, ma tylko 2 dzielniki: 1 i ' + num + '\nInAppCode: 12')
      } else {
        let numAsString = getDividers(num).length.toString();
        console.log(`Liczba ${num} ma ${getDividers(num).length} ${(numAsString.endsWith("4") || numAsString.endsWith("3")) ? "dzielniki" : "dzielników"}, są to: ${getDividers(num)} \nInAppCode: 0${getDividers(num).length} \nRatio: ${(getDividers(num).length * 100) / num}`)
      }
    }
    recursiveAsyncReadLine();
  });
};
recursiveAsyncReadLine();