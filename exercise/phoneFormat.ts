/*
    input = "123456789"
    output = "(123)-456-789"

    input = "987654321"
    output = "(987)-654-321"
*/

function myFunc (str: string) {
    let res = "(xxx)-xxx-xxx"
    for (let i = 0; i < str.length; i++) {
        res = res.replace("x", str.charAt(i))
        console.log(res)
    }
    return res
}

console.log(myFunc("123456789"))