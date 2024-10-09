interface Input {
    [key: string]: any
}

const obj1: Input = { a: 1, b: 2 }
const obj2: Input = { a: 1, b: "2" }

function isEqual (obj1: Input, obj2: Input) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

console.log(isEqual(obj1, obj2))