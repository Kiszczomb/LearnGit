

function isPrime(num) {
  console.log("Podana liczba to: " + num)
  if (num < 2) return false && console.log("Liczba jest mniejsza od 2 \nNie jest pierwsza") 
  console.log("Liczba jest większa od 2, sprawdzam dalej...");
  for (var i = 2; i < num; i++) {
    /*
    process.stdout.write("\r\x1b[K")
    process.stdout.write("Sprawdzam, czy liczba jest podzielna przez " + i)
    */
    if (num % i == 0) {
      console.log("Liczba jest podzielna przez " + i + "\nNie jest pierwsza")
      return false;
    }

  }
  console.log("Liczba nie jest podzielna przez żadną z inną mniejszą od niej \nJest pierwsza!")
  return true;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Podaj liczbę do sprawdzenia, czy jest pierwsza: ', (number) => {
  console.log(isPrime(number));

  rl.close();
});



//console.log(isPrime())