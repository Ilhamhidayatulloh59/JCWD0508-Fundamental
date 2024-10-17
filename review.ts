// const data: boolean = Boolean(NaN)
// const data2: boolean = true

// console.log(data === data2)

// const data = Number("12a")
// const a = null
// let b

// console.log(typeof data)
// console.log(typeof a)
// console.log(typeof b)

// const big = 2104982305237841n
// console.log(typeof big)

// const data: any = 1
// const data2: any = true

// console.log(data === data2)


// const arr: number[] = [0, 1, 2, 3, 4, 5]
// const arrStr: string[] = 'abcde'.split("")
// -> mutating method
// arr.push(6)
// arr.pop()
// arr.shift()
// arr.unshift(0)
// arr.splice(1, 2, 8)
// arr.sort((a, b) => b - a)
// arr.reverse()
// arr.fill(2)
// arr.copyWithin()

// arrStr.copyWithin(-3, 0)

// arr.forEach((v, i, a) => a[i] = v * 2)
// arr.map((v, i, a) => a[i] = v * 2)
// arr.join("")

// console.log(arrStr)

// let data: any = '0'
// let data2: any = true

// console.log(data == data2)


// const arr = [1, 2, 3, 3, 3, 4, 5]
// const arr2 = [... new Set(arr)]

// console.log(arr2);

// const map = new Map()

// map.set(1, 'andi')

// console.log(map.size)

// const obj = { 1: 'andi' }
// console.log(Object.keys(obj).length)

// const data: any[] = [
//     () => [
//         ["andi", "budi"],
//         false
//     ],
//     [() => [10, 11, 12], 13],
//     { num: [1, 2, 3], count() { return "Hello World" } },
//     () => () => {
//         return {
//             great(str: string) {
//                 return `Hello ${str}`
//             }
//         }
//     }
// ]

// console.log(data[3]()().great(data[0]()[0][0]))

// do {
//     console.log(1)
// } while (false)

// while (true) {
//     console.log(1)
// }
// let a = 1

// function sum () {
//     a = 10
// }

// sum()
// console.log(a)


// let asd = 2

// console.log(!asd)


// let a: any = 2

// a = 'asd'

// console.log(typeof a)

// const b: string = '1'
// const c: boolean = true

// console.log(a + b - b) // '21' - '1' = 20
// console.log(a + (b - b)) // 2 + 0
// console.log(a % b)

// console.log(a + c + b)
// console.log((a + b) * c)
// console.log(a + b + c)

// console.log('AZ' > 'Ac')

// console.log(' '.charCodeAt(0))
// console.log('A'.charCodeAt(0))

// const arr = [123, 10, 1, 2]
// arr.sort((a, b) => a - b)
// console.log(arr)
