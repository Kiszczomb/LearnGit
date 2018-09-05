var arr1 = []


function countFrom1ToX(x) {
  for (let i = 1; i <= x; i++) {
    arr1.push(i)
  }
}
console.log(arr1)

countFrom1ToX(6)

console.log(arr1)


//part 2

while (!(arr1.length == 0)) {
  console.log(arr1.pop())
}