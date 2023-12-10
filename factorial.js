function factorial(number) {
    let mul = 1;
    for(let i = 1; i <= number; i++) {
        mul = mul * i;
    }
    return mul;
}

let result = factorial(4);
console.log("4! is", result);