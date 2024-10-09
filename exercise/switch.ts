function myFunc (input: any) {
    const res: any = {}
    const obj = input[0]

    for (let key in obj) {
        res[obj[key]] = key
    }

    return [res]
}

console.log(myFunc([{ name: "David", age: 20 }]))
