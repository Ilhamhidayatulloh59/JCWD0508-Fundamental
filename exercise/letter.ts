/*
    a = 1
    b = 2
    c = 3
    ...
    z = 26

    input = "Abcd"
    output = 10 => 1 + 2 + 3 + 4

    input = "Bandung"
    output = 63 => 2 + 1 + 14 + 4 + 21 + 14 + 7
*/

function myFunc (str: string) {
    const alpha: string[] = " abcdefghijklmnopqrstuvwxyz".split("")

    return str.split("")
        .map(item => alpha.indexOf(item.toLowerCase()))
        .reduce((a, b) => a + b)
}

console.log(myFunc("Bandung"))
console.log(myFunc("Purwadhika"))

console.log("z".charCodeAt(0) - 96)

