const n: number = 100

const sisa: number = n % 365
const sisa2: number = sisa % 30

const tahun: number = (n - sisa) / 365
const bulan: number = (sisa - sisa2) / 30
const hari: number = sisa2

const result: string = `${tahun} year, ${bulan} month, ${hari} days`

console.log(result)

// console.log(Math.floor(5.9)) // membulatkan ke bawah
// console.log(Math.ceil(5.01)) // membulatkan ke atas
// console.log(Math.round(5.4)) // membulatkan

const date1: Date = new Date("2024-10-01") 
const date2: Date = new Date("2026-10-03")

const diff: number = date2.getTime() - date1.getTime()

console.log(diff / (24 * 60 * 60 * 1000))
