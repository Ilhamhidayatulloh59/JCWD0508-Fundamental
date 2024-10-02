/*
    n = 10

        *
       **
      ***
     ****
    *****
*/

const n: number = 5
 
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i))
}

// let res: string = ""
// for (let i = 1; i <= n; i++) {
//     res += "*"
//     console.log(res);
// }