function triangle (height: number) {
    let result: string = ""
    for (let i = 1; i <= height; i++) {
        let res: string = ""
        for (let j = 1; j <= i; j++) {
            res += `${j} `
        }
        if (i !== height) res += '\n'
        result += res
    }
    return result
}

console.log(triangle(5))