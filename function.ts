// function declaration
function reverseStr (input: string) {
    return input.split("").reverse().join("")
}

const letter: string = reverseStr("Hello World")

// console.log(letter)
// console.log(reverseStr("Bandung"))
// console.log(reverseStr("Madam"))

// function expression & rest parameters
const sum = function (a: number = 0, b: number = 0, ...others: number[]) {
    console.log(others)
    return a + b 
}

// console.log(sum(10, 3))

// nested function
function getMessage (firstName: string) {
    function sayHello () {
        return "Hello " + firstName
    }

    function welcomeMessage () {
        return "Welcome to Purwadhika"
    }

    return sayHello() + ", " + welcomeMessage()
}

// console.log(getMessage("David"))

// closure function
function greeting (name: string) {
    const defaultMsg: string = "Hello "
    return function () {
        return defaultMsg + name
    }
}

// const greetingDavid = greeting("David")
// console.log(greetingDavid())
// console.log(greeting("David")())

function capitalize (str: string) {
    let res: string = ""
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str.charAt(i - 1) == " ") {
            res += str.charAt(i).toUpperCase()
        } else {
            res += str.charAt(i).toLowerCase()
        }
    }
    return res
}

// console.log(capitalize("hello world"))
// console.log(capitalize("purwadhika bandung"))
// console.log(capitalize("david di sini"))

function checkOddEven (num: number) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// currying
function multiplier (factor: number) {
    return function (num: number) {
        return factor * num
    }
}

const mul3 = multiplier(3)
const mul5 = multiplier(5)

// console.log(mul3(4))
// console.log(mul3(5))
// console.log(mul3(10))
// console.log(mul5(2))

// console.log(multiplier(10)(2))

// recursive function
function countDown (fromNumber: number) {
    console.log(fromNumber)

    let nextNumber: number = fromNumber - 1
    
    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

// countDown(3)

// arrow function
const square = (a: number, b: number) => a * b
// console.log(square(4, 2))

console.log(parseFloat("10.15"))

console.log(parseInt("1011", 2)) // biner
console.log(parseInt("123", 8)) 
// oktal = 1 * 8^2 + 2 * 8^1 + 3 * 8^0
//  = 64 + 16 + 3 = 83
