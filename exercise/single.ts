function single (arr: number[]) {
    return arr
        .filter((item, _idx, num) => num
        .filter(val => val == item).length == 1)
}

// console.log(single([4, 1, 2, 1, 2, 3, 2]))

const arr = [4, 1, 2, 1, 2, 3, 2]

// arr.forEach((item, idx, num) => {
//     console.log(`${item} berada di index ke ${idx} dari ${num}`)
// })