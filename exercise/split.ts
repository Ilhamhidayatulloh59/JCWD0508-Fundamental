/*
    input = "helloWorld"
    output = ["hello", "World"]

    input = "johnDoeMiller"
    output = ["john", "Doe", "Miller"]
*/

function splitUpper (str: string) {
    // return str.split(/(?=[A-Z])/)
    return str
        .split("")
        .map((item) => item == item.toUpperCase() ? ` ${item}` : item)
        .join("")
        .split(" ")
}

console.log(splitUpper("helloWorld"))
console.log(splitUpper("johnDoeMiller"))