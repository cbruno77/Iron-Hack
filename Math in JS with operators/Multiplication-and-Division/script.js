const price = 26.5;    // Price of item before tax
const taxRate = 0.082; // 8.2% tax rate

// Calculate total after tax to two decimal places
let totalPrice = price + (taxRate * price);
totalPrice2 = totalPrice.toPrecision(2);

console.log("Total: " + totalPrice);
console.log("Total: " + totalPrice2);