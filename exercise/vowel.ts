/*
    input : "Purwadhika"
    output : 4

    input : "Bandung"
    output : 2
*/

function countVowel (str: string) {
    const vowel = ["a", "i", "u", "e", "o"]
    let res: number = 0

    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str.charAt(i))) {
            res++
        }
    }

    return res
}

console.log(countVowel("Purwadhika"))
console.log(countVowel("Bandung"))