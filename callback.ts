function calculator (a: number, b: number, callback: (x: any, y: number) => void = displayer) {
    callback(a + b, 1)
}

function displayer (something: any) {
    console.log(something)
}

function multiplyer2 (num: number) {
    console.log(num * 2)
}

calculator(10, 5, (a, b) => console.log(a - b))


