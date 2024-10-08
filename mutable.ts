// let name: string = "Andi"

// let newName: string = name

// name = "Budi"

// console.log(newName)

const arr: number[] = [1, 2, 3]

// copy value (spread oprator / ...)
const newArr: number[] = [...arr] 

arr.push(4)

// console.log(arr)
// console.log(newArr)

interface IPerson {
    name: string
    age: number
}

const person: IPerson = {
    name: "Andi",
    age: 25
}

// const newPerson = { ...person, hobby: "coding" }

// newPerson.name = "Budi"

// console.log(person)
// console.log(newPerson)

// looping object
for (let key in person) {
    console.log(key)
    console.log(person[key as keyof typeof person])
}

