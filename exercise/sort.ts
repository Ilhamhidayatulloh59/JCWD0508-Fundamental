let num1: number = 42 // 27
let num2: number = 27 // 18
let num3: number = 18 // 42

if (num1 > num2) {
    const n: number = num1
    num1 = num2
    num2 = n
}
if (num2 > num3) {
    const n: number = num2
    num2 = num3
    num3 = n
}
if (num1 > num2) {
    const n: number = num1
    num1 = num2
    num2 = n
}

console.log(num1, num2, num3)