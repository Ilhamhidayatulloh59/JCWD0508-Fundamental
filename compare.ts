const arr = [1]
const arr2 = [...arr]

// console.log(arr == arr2)

// console.log(typeof arr)

const obj1 = { name: "Andi" }
const obj2 = { name: "Andi" }

// console.log(obj1 == obj2)

const null1 = null
const null2 = null

// console.log(null1 == null2)

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
const final = Object.assign(target, source)

Object.assign(target, { d: 10 })

// console.log(target)
// console.log(final)

const n = [1, 2, 3]
n[2] = 10
n[4] = 5
n[19] = 20

// n = [5, 6, 7]

// console.log(n)

const num: any = { a: 1, b: 2, c: 3 }

num["d"] = 4

console["log"]("Hello World")
