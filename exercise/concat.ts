function concate (input: string[]) {
    const str: string = input.pop() || ""
    return input.join(", ") + ", and " + str
}

console.log(concate(["apple", "banana", "cherry", "date"]))
