interface Student {
    name: string
    email: string
}

const arr1: Student[] = [
    { name: "Student 1", email: "student1@gmail.com" },
    { name: "Student 2", email: "student2@gmail.com" },
    { name: "Student 4", email: "student4@gmail.com" }
]
const arr2: Student[] = [
    { name: "Student 1", email: "student1@gmail.com" },
    { name: "Student 3", email: "student3@gmail.com" }
]

function mergeArr (arr1: Student[], arr2: Student[]): Student[] {
    const result: Student[] = arr1

    for (let item of arr2) {
        const idx = result.findIndex((val) => val.name == item.name && val.email == item.email)
        if (idx == -1) result.push(item)
    }
    
    return result
}

console.log(mergeArr(arr1, arr2))