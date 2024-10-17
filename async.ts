// console.log("Task 1")
// setTimeout(() => console.log('Task 2'), 3000)
// console.log("Task 3")


// const tryPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false
//         if (success) {
//             resolve('Task 2')
//         } else {
//             reject('Task 2 error')
//         }
//     }, 3000)
// })

// const myFunc = async () => {
//     console.log('Task 1')

//     await tryPromise
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
//         // .finally(() => console.log('finally done'))

//     console.log('Task 3')
// }

// myFunc()

// const tryCatch = async () => {
//     try {
//         console.log('Task 1')
//         const res = await tryPromise
//         console.log(res)
//         console.log('Task 3')
//     } catch (err) {
//         console.log(err)
//     }
// }

// tryCatch()

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/use')
        if (!response.ok) throw { msg: 'failed to fetch' }
        const users = await response.json()
        console.log(users)
    } catch (err) {
        console.log(err)
    }
}

getData()
