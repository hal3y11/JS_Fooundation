//Input
const weight = 2.3;
const minPerKg = 45;
const finishing = 20;

//cal
const cookTime =Math.ceil(weight * minPerKg + finishing);
const hours = Math.floor(cookTime / 60);
const mins = Math.floor(cookTime % 60);

//output
console.log(`Time to cook the chicken is ${hours}hrs and ${mins} min`);
  