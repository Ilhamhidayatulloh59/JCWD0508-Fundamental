// template object
class User {
    firstName = ""
    #lastName = "" // privat
    static word = "Hello World" // static

    constructor(first: string, last: string) {
        this.firstName = first
        this.#lastName = last
    }

    greet() {
        console.log(`Hello ${this.firstName}`)
    }

    getLastName() {
        return this.#lastName
    }
}

const user1 = new User("Frengky", "Sihombing")
const user2 = new User("John", "Doe")
const user3 = new User("Jane", "Dine")

console.log(user1.getLastName())
console.log(user2.getLastName())
console.log(user3.getLastName())

console.log(User.word)

// user1.greet()
// user2.greet()
// user3.greet()

console.log(Math.abs(-121))