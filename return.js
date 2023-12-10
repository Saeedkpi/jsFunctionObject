function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);

    return sum;
}

// add(45, 15);

var total = add(55, 25);
// console.log("total", total);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTk = 150;
var singaras = bringSingara(myTk);
console.log("Eating singaras :", singaras);
