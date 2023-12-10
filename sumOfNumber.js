function sumOfNumbers(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

let result = sumOfNumbers(50);
console.log("1+2+3......+50 =", result);