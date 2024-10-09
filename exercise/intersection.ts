function intersection(arg1:any,arg2:any) {
    let output:any = {}
     for(let key in arg1){
        if (arg2.hasOwnProperty(key) && arg1[key] === arg2[key]) {
            output[key] = arg1[key];
        }
     }
    return output
}
console.log(intersection({ a: 1, b: 2 },{ a: 1 }))
