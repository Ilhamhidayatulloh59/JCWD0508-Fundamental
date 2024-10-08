// interface Icar {
//     brand: string
//     model: string
//     price: number
// }

type Car = {
    brand: string,
    model: string,
    price: number
}

const car: Car = {
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
}

interface IUser {
    name: string
    hobby?: string
    address?: {
        street: string
        country: string
    }
    greeting(input: string): void // tidak mereturn
}

const user: IUser = {
    name: "David",
    greeting(input: string) {
        console.log("Hello" + input)
    }
}
// console.log(user.name) // "." (dot)
// console.log(user["name"])

user.hobby = "ngoding"
console.log(user)

delete user.hobby
console.log(user)

user.address = {
    street: "Braga",
    country: "Indonesia"
}

// optional chaining
console.log(user.address?.street)

console.log(Object.keys(user))