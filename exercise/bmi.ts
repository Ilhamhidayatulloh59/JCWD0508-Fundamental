function calculateBMI (weight: number, height: number) {
    const score: number = weight / ((height / 100) ** 2)
    if (score < 18.5) {
        return "less weight"
    } else if (score < 24.9) {
        return "ideal"
    } else if (score < 29.9) {
        return "overweight"
    } else if (score < 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }
}

console.log(calculateBMI(70, 170))