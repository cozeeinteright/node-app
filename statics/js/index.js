function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`)

  return `${firstName} ${lastName}`
}

function printNTimes(n, value) {
//  debugger
  for(let i = 0; i < n; i++) {
    console.log(value)
  }
}

document.addEventListener("click", () => {
  console.log("Clicked")
})

setTimeout(() => {
  console.log("Time")
}, 1000)

printName("Kyle", "Cook")
printNTimes(5, "Hi")