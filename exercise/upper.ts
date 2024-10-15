/*
    input = "Hello Purwadhika"
    output = [13, 2]

    input = "B4ndung"
    output = [5, 1]

    answer = [lowerCount, upperCount]
*/

function myFunc (str: string) {
    const letter = str.replace(/[\s/0-9]/g, "")
    const lower = letter.replace(/[A-Z]/g, "")
    return [lower.length, letter.length - lower.length]
}

console.log(myFunc("Hello Purwa dhika"))
console.log(myFunc("B4ndung"))