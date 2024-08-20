let width = 10;
let length = 15;
const cost = 11.7;
const bagSize = 3500; //kg to g

//cal
let area = width * length;
let amountOfSeed = area * 30;
let noOfBags = Math.ceil(amountOfSeed/bagSize);
let costOfSeed = noOfBags * cost;

//output
console.log(`Area: ${area}
Amount Of Seed: ${amountOfSeed} 
Number Of Bags: ${noOfBags}
Cost Of seed: ${costOfSeed.toFixed(2)}`);
 