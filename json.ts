const obj1 = { name: 'andi', age: 25 }
const obj2 = {
    name: 'andi',
    age: 25
}

const arr1 = [1, 2, 3]

const json1: string = JSON.stringify(obj1)
const json2: string = JSON.stringify(obj2)
const json3: string = JSON.stringify(arr1)

console.log(json3)
console.log(JSON.parse(json3))
// console.log(JSON.stringify(arr1))


