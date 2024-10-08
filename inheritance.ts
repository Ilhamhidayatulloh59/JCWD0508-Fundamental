class Product {
    productName = ""
    productPrice = 0

    constructor(name: string, price: number) {
        this.productName = name
        this.productPrice = price
    }
}

class Book extends Product {
    title = ""
    author = ""

    constructor(title: string, author: string, price: number) {
        super("Buku", price)
        this.title = title
        this.author = author
    }
}

const book1 = new Book("Harry Poter", "JK. Rowling", 150000)

console.log(book1)
console.log(book1 instanceof Book)
console.log(book1 instanceof Product)