function secSmall (arr: number[]) {
    arr.sort((a, b) => a - b)
    const newArr = arr.filter((item) => item > arr[0])
    return newArr[0]
}

console.log(secSmall([5, 3, 1, 7, 2, 6, 1, 1, 1]))
