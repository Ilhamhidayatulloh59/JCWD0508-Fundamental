// for (let i = 1; i <= 5; i++) {
//     if (i == 3) continue
//     console.log(`Hello ke-${i}`)
// }

// let i: number = 1
// while (true) {
//     console.log(`Hello ke-${i}`)
//     if (i > 10) break
//     i += 2
// }

// do while
// do {
//     console.log(`Hello ke-${i}`)
//     i++
// } while (false)

const n: number = 3

let result: number = 1
for (let i = n; i > 0; i--) {
    result *= i // 6 x 5 x 4 x 3 x 2 x 1 = 720
}

console.log(result)