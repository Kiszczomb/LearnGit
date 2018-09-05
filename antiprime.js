
function howManyDividers(num) {
  var dividers = []
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      dividers.push(i)
    }
  }
  console.log("Dzielniki liczby " + num + " to: " + dividers)
  console.log("Jest ich " + dividers.length)
  return dividers.length;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Podaj liczbę do sprawdzenia, ile ma dzielników: ', (number) => {
  console.log(howManyDividers(number));

  rl.close();
});
