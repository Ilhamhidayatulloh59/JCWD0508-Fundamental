const arr: Array<string> = ["A", "B", "C", "a"]
const arr2: string[] = new Array("A", "B", "C")

// console.log(arr)
// console.log(arr[2])
// console.log(arr.length)

// menambahkan value dibelakang
arr.push("D")

// menambahkan value didepan
arr.unshift("E")

// menghapus value terakhir
arr.pop()

// menghapus value pertama
arr.shift()

// menghapus / menambahkan index ke ? 
arr.splice(2, 0, "Z")

// console.log(arr)

const numArr: number[] = [1, 3, 2, 100, 21] 

// numArr.sort((a, b) => a - b) // sort asc
// numArr.sort((a, b) => b - a) // sort desc

// arr.sort() // sort asc alphabetic
// arr.sort().reverse() // sort desc alphabetic

const oddNumber: number[] = numArr
    .filter((item) => item % 2 == 1 && item > 2)
    .sort((a, b) => b - a)

// console.log(oddNumber)
// console.log(oddNumber.find((item) => item == 3))
// console.log(oddNumber.findIndex((item) => item == 3))
// console.log(oddNumber.includes(3))

const str: string = "kasur rusak"

console.log(str.split("").reverse().join(""))

const newArr: number[] = [10, 20, 30, 40, 50]
const newArr2: number[] = newArr.map((item) => item += 5)
const newArr3: number[] = []

newArr.forEach((item) => {
    newArr3.push(item + 5)
})

console.log(newArr2);
console.log(newArr3);

// return array baru
// newArr.map((item, idx) => {
//     console.log(item, idx);
// })

// looping for of (array)
for (let item of newArr) {
    console.log(item);
}