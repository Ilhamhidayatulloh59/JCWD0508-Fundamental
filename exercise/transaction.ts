class Product {
    name: string = ""
    price: number = 0

    constructor(nama: string, harga: number) {
        this.name = nama
        this.price = harga
    }
}

const product1 = new Product("Apple", 20000)
const product2 = new Product("Banana", 30000)
const product3 = new Product("Cherry", 50000)

class Transaction {
    #total: number = 0
    #products: object[] = []

    addToCart (product: Product, qty: number) {
        this.#products.push({ 
            ...product, 
            qty, 
            total: product.price * qty 
        })
        this.#total += product.price * qty
    }

    show() {
        this.#products.push({ total: this.#total })
        console.table(this.#products)
    }

    checkout(money: number) {
        if (money < this.#total) {
            console.log("Uang anda tidak cukup")
        } else {
            console.log(`Cash : ${money}`)
            console.log(`Return : ${money - this.#total}`)
            console.log(`~~~ Thank You ~~~`)
        }
    }
}

const transaction1 = new Transaction()
transaction1.addToCart(product1, 2)
transaction1.addToCart(product2, 1)
transaction1.addToCart(product3, 3)

transaction1.show()
transaction1.checkout(250000)