const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Your age?: ', (age) => {
  console.log(`You ${(age >= 18) ? 'can' : 'cannot' } drive a car`);
  rl.close();

});