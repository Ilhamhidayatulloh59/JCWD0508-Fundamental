// const arr: number[] = [1, 2, 3]

// function myFunc () {
//     arr.push(4)
//     return "Hello World"
// }

// console.log(arr)
// console.log(myFunc())
// console.log(arr)

/*
    input = "Pig latin is cool"
    output = "igPay atinlay siay oolcay"

    input = "Hello World"
    output = "elloHay orldWay"
*/

function myFunc (input: string) {
    return input
        .split(' ')
        .map((item) => item.slice(1) + item.charAt(0) + "ay")
        .join(" ")
}

console.log(myFunc("Pig latin is cool"))
console.log(myFunc("Hello World"))