const age: number = 21

if (age >= 17) {
    console.log("You can now create an ID Card")
} else {
    console.log("You are not old enough to create an ID Card")
}

let grade: string = "B"

if (grade == "A") {
    console.log("Excellent Result!")
} else if (grade == "B") {
    console.log("Great Result!")
} else if (grade == "C") {
    console.log("Average Result!")
} else {
    console.log("Invalid Grade!")
}

const date: Date = new Date("2025-01-01")
const day: number = date.getDay()

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jum'at")
        break
    case 6:
        console.log("Sabtu")
        break
    default: 
        console.log("Invalid day")
}

// console.log(Boolean(""))

const x: number = 6
const y: number = 3

// console.log(x < 10 || y > 5)

// console.log(!(x < 10))

const str: string = "Typescript"

if (str == "Typescript") {
    console.log("Typescript")
} else {
    console.log("Not Typescript")
}

// ternary oprator
console.log(str == "Typescript" ? "Typescript" : str == "Javascript" ? "Javascript" : "Not TS or JS")

// short-circuiting
const value: string = ""

const result: string = value && "Purwadhika"
const result2: string = value || "Purwadhika"

console.log(result)
console.log(result2)