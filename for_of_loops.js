const amounts = [61.00, 52.25, 119.99, 5.00]
let total = 0;
for (let i=0; i<amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

// For..of loop -> preferred method for looping over iterable objects (arrays)!
let total2 = 0;
for (let amount of amounts) {
  total2 += amount;
}
console.log(`Order total is: $${total2}`)