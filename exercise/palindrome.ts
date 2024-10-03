// madam - makan

const str: string = "madam"
let reverseStr: string = ""

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i)
    console.log(reverseStr)
}

console.log(str == reverseStr ? "Palindrome" : "not Palindrome");
