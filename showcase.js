function textForCondition(condition) {
  if (condition) {
    return "Hello"
  } else {
    return "Good night"
  }
}

let time = 12 // o´clock

console.log(textForCondition(time < 18))
console.log( (time < 18) ? "Hello" : "Good night")


