const data: any[] = [
    () => [
        ["andi", "budi"],
        false
    ],
    [() => [10, 11, 12], 13],
    { num: [1, 2, 3], count(){ return "Hello World" } },
    () => () => {
        return {
            great() {
                return "Purwadhika Bandung"
            }
        }
    }
]

// console.log(data[3]()()["great"]())
// console.log(data[2].count())
// console.log(data[2].num)
// console.log(Object.keys(data[2]))
// console.log(data.length)
// console.log(data[0]()[1])
// console.log(data[1][0]()[1])
// console.log(data[1][1])

const obj: {[ x: string]: any } = {
    name: "andi",
    age: 21,
    country: "indonesia",
    1: "budi"
}

console.log(obj)

// for (let key in obj) {
//     console.log(obj[key])
// }
