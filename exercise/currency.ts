const num: number = 123456789 // 123.456.789
const numStr: string = num.toString() // .length .charAt
let count: number = 0

let res: string = ""

for (let i = numStr.length - 1; i >= 0; i--) {
    if (count % 3 == 0 && count > 0) {
        res = "." + res
    }

    res = numStr.charAt(i) + res
    count++
}

console.log(`Rp ${res},00`)
console.log(num.toLocaleString("id-ID", { style: 'currency', currency: 'IDR' }))
