const fruits: string[] = ["banana", "apple", "jackfruit", "apple"]

const newFruits = new Set(fruits)


newFruits.add("melon")
newFruits.delete("jackfruit")
// newFruits.clear()
// console.log(newFruits.entries())
console.log(newFruits.values())

newFruits.forEach((item) => {
    console.log(item)
})

// console.log(newFruits)

const newNum = new Set([1, 2, 3, 1])
console.log(newNum)
