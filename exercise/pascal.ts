function pascal (n: number) {
    const res: any[] = []
    for (let i = 0; i < n; i++) { // 4
        const arr = [] // [1, 3, 3, 1] => j = 0
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                arr.push(1)
            } else {
                arr.push(res[i - 1][j - 1] + res[i - 1][j])
            }
        }
        res.push(arr)
    }
    return res
}

console.log(pascal(5))