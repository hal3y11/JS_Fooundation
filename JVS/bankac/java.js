//when page loads
//get references to interactive elements 
const txtAmount = document.getElementById("amount");
const btnWithdraw = document.getElementById("withdraw");
const btnDeposit = document.getElementById("deposit");
const txtOutput = document.getElementById("output");
//listen for user clicking buttons
btnDeposit.addEventListener("click" , deposit);
btnWithdraw.addEventListener("click" , withdraw);

//set balance to 0
let balance = 0;

//output balance in output field
txtOutput.innerText = `Your current balance is £${balance.toFixed(2)}`;

//when deposit button clicked
function deposit(){
    console.log("deposit");
    

//read amount from amount field
const amount = parseFloat(txtAmount.value)


//increase balance by amount
balance = balance + amount ; 

//output balance in output field
txtOutput.innerText = `Your current balance is £${balance.toFixed(2)}`;
}
//when withdraw button clicked
function withdraw(){
    console.log("withdraw");

//read amount from amount field
const amount = parseFloat(txtAmount.value)

//decrease balance by amount
balance = balance - amount ; 

//output balance in output field
txtOutput.innerText = `Your current balance is £${balance.toFixed(2)}`;
}
