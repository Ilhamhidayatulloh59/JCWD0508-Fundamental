function fib (n: number) {
    const res: number[] = [0, 1]
    for (let i = 0; i < n; i++) {
        res.push(res[i] + res[i + 1])
    }
    return res[n + 1]
}

console.log(fib(5))