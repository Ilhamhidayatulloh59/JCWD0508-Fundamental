function profit(arr: number[]) {
    // const min = Math.min(...arr)
    // const idxMin = arr.indexOf(min)
    // const newArr = arr.splice(idxMin)
    // const max = Math.max(...newArr)

    // return max - min

    const res = []
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            res.push(arr[i] - arr[j])
        }
    }
    return res
}

console.log(profit([8, 3, 2]))

function profit2(prices: number[]) {
    var min = Math.min(...prices)
    var index = prices.indexOf(min)
    var arr = []

    for (var i = index + 1; i < prices.length; i++) {
        arr.push(prices[i] - min)
    }
    var high = Math.max(...arr)
    var idxMax = arr.indexOf(high)

    return index + idxMax
}

console.log(profit2([2, 9, 7, 1, 5, 3, 6, 4]));
console.log(profit2([7, 1, 5, 3, 6, 4]));