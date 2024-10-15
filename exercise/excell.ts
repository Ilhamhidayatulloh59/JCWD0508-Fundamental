function myFunc (str: string) {
    return str
        .split("")
        .reduce((a, b) => a * 26 + parseInt(b, 36) - 9, 0)
}

console.log(myFunc("AA"))

const arr = [1, 2, 3, 4, 5]
console.log(arr.reduce((a, b) => a + b, 0))

console.log(parseInt("A", 36))