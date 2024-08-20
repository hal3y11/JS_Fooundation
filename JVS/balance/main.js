//when page loads
//get references to interactive elements 
const txtBalance = document.getElementById("balance");
const btnBalance = document.getElementById("checkBalance");
const txtOutput = document.getElementById("output");
const theForm = document.getElementById("theForm");


//listen for user clicking buttons
btnBalance.addEventListener("click", checkBalance);


//when check balance button clicked
function checkBalance(event) {
    if (theForm.checkValidity()) {
        event.preventDefault();
        

        //input balance
        const nbalance = parseFloat(txtBalance.value);
        //if balance < 0
        if (nbalance < 0) {
            //output "overdrawn" in output field
            txtOutput.innerText = "You are broke bitch";
        }
        //else
        else {
            //output "in credit" in output field
            txtOutput.innerText = "Lets party";
        }
    }
}

