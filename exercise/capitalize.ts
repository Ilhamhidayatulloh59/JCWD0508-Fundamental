const str: string = "hello student purwadhika bandung"

let res: string = ""

// for (let i = 0; i < str.length; i++) {
//     if (i == 0 || str.charAt(i - 1) == " ") {
//         res += str.charAt(i).toUpperCase()
//     } else {
//         res += str.charAt(i).toLowerCase()
//     }
// }

let isCapital: boolean = true

for (let i = 0; i < str.length; i++) {
    if (isCapital) {
        res += str.charAt(i).toUpperCase()
        isCapital = false
    } else {
        res += str.charAt(i).toLowerCase()
    }
    
    if (str.charAt(i) == " ") {
        isCapital = true
    }
}
console.log(res)
