function factorial (n: number): number {
    console.log(n)
    return n == 0 ? 1 : n * factorial(n - 1)
}

const factorial2 = (n: number): number => n == 0 ? 1 : n * factorial2(n - 1)

console.log(factorial(5))
// console.log(factorial2(5))