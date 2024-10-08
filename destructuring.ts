const person = {
    name: "David",
    age: 25,
    hobby: "Coding"
}
// object destructuring
const { name, age, hobby } = person

// console.log(name)
// console.log(age)
// console.log(hobby)

// array destructuring
const arr = [1, 2, 3]
const [a, b, c] = arr

// console.log(a)
// console.log(b)
// console.log(c)

const user = {
    firstName: "Frengky",
    lastName: "Sihombing",
    greet() {
        console.log(`Hello ${this.firstName}`)
    }
}
user.greet()

console.log(Object.entries(user))
Object.freeze(user)

console.log(user.hasOwnProperty("greet"))
console.log(Object.isFrozen(user))
console.log(Object.values(user))

// user.firstName = "Andi"
// console.log(user)