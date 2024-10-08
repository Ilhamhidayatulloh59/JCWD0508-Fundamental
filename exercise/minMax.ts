// console.log(Math.min(1, 2, 3, 4, 5))

function minMax (arr: number[]) {
    const lowest: number = Math.min(...arr)
    const highest: number = Math.max(...arr)
    const average: number = arr.reduce((a, b) => a + b) / arr.length

    return { 
        lowest: lowest,
        highest: highest,
        average: average
    }
}

console.log(minMax([12, 5, 23, 18, 4, 45, 32]))
