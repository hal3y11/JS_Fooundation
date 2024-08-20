const hourlyrate = 7.5;
let hoursWorked = 40;
let name = "Jan";

//cal
let pay = hourlyrate * hoursWorked; 

//output
console.log(`${name} has worked ${hoursWorked} hours`);
console.log(`take home pay is £${pay.toFixed(2)}`);