class Student {
    name = ""
    email = ""
    dob = ""
    score = 0

    constructor(nama: string, surel: string, tanggal: string, nilai: number) {
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }

    getAge() {
        const now = new Date()
        const date2 = new Date(this.dob)
        const diff = now.getTime() - date2.getTime()

        return Math.floor(diff / (24 * 60 * 60 * 1000) / 365)
    }
}

const student1 = new Student("Andi", "andi@gmail.com", "2002-01-01", 80)
const student2 = new Student("Budi", "budi@gmail.com", "2000-01-01", 85)
const student3 = new Student("Caca", "caca@gmail.com", "1998-01-01", 90)

const arrStudent = [student2, student1, student3]

function calculate(arr: Student[]) {
    const dataScore = arr.map((item) => item.score).sort((a, b) => a - b)
    const dataAge = arr.map((item) => item.getAge()).sort((a, b) => a - b)

    return {
        score: {
            lowest: dataScore[0],
            highest: dataScore[dataScore.length - 1],
            average: dataScore.reduce((a, b) => a + b) / dataScore.length
        },
        age: {
            lowest: dataAge[0],
            highest: dataAge[dataAge.length - 1],
            average: dataAge.reduce((a, b) => a + b) / dataAge.length
        }
    }
}

console.log(calculate(arrStudent));

