function func1() {
  let age = 29

  function func2() {
    age++
    console.log(age)
  }

  return func2
}
const result = func1()

result()
result()

