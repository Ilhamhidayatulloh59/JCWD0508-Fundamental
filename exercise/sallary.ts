class Employee {
    name = ""
    type = ""
    #hour = 0
    #bSallary = 0
    #otSallary = 0

    constructor(name: string, type: string, bSallary: number, otSallary: number) {
        this.name = name
        this.type = type
        this.#bSallary = bSallary
        this.#otSallary = otSallary
    }

    setHour (n: number) {
        this.#hour += n
        return this.#hour
    }

    getSallary() {
        if (this.#hour <= 6) {
            return this.#hour * this.#bSallary
        } else {
            return this.#bSallary * 6 + (this.#hour - 6) * this.#otSallary
        }
    }
}

class FulltimeEmployee extends Employee {
    constructor(name: string) {
        super(name, "Full-time", 100000, 75000)
    }
}

class ParttimeEmployee extends Employee {
    constructor(name: string) {
        super(name, "Part-time", 50000, 30000)
    }
}

const employee1 = new FulltimeEmployee("Kemal")
console.log(employee1)
console.log(employee1.setHour(10))
console.log(employee1.getSallary())
