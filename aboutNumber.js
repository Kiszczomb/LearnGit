
//First: variables
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var dividers = []

//Second: functions
function howManyDividers(num) {
  dividers = []
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      dividers.push(i)
    }
  }
  //console.log("Dzielniki liczby " + num + " to: " + dividers)
  //console.log("Jest ich " + dividers.length)
  return dividers.length;
}

function isPrime(num) {
  if (num < 2) return false
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }

  }
  return true;
}

function aboutNumber(num) {
  if (isPrime(num)) {
    console.log(num + " to liczba pierwsza, ma tylko 2 dzielniki: 1 i " + num)
    return 12
  }
  else {
    var numAsString = howManyDividers(num).toString();
    if (numAsString.endsWith("4") == true || numAsString.endsWith("3") == true) {
      console.log("Liczba " + num + " ma " + howManyDividers(num) + " dzielniki, są to: " + dividers)
    }
    else {
      console.log("Liczba " + num + " ma " + howManyDividers(num) + " dzielników, są to: " + dividers)
    }
    return ("0" + dividers.length)

  }
}

//Third: input

rl.question('Podaj liczbę do sprawdzenia jej cech: ', (number) => {
  console.log(aboutNumber(number));

  rl.close();
});
