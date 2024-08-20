//exchange rates http://www.convertmymoney.com/
//currency symbols http://www.javascripter.net/faq/mathsymbols.htm
//currency display https://www.star-ts.com/translation-faq/how-world-monetary-values-are-displayed/

//when page loads
//get references to interactive elements 
const txtPounds = document.getElementById("pounds");
const btnDollars = document.getElementById("dollars");
const btnEuros = document.getElementById("euro");
const btnYen = document.getElementById("yen");
const txtOutput = document.getElementById("output");

//listen for user clicking buttons
btnDollars.addEventListener("click", convertDollars);
btnEuros.addEventListener("click", convertEuros);
btnYen.addEventListener("click", convertYen);

//when dollars button clicked
function convertDollars(){
    console.log("dollars");
//set dollar rate to 1.2
const dollarRate = 1.2;
//read pounds from pound field
const pounds = parseFloat(txtPounds.value);

//calculate dollars
const noOfDollars = pounds * dollarRate;
//output dollars in output field
txtOutput.innerText = `£${pounds.toFixed(2)} is worth ${noOfDollars.toFixed(2)}`;
}



//when euros button clicked
function convertEuros(){
    console.log("euros");
//set euro rate to 1.13
const euroRate = 1.13;

//read pounds from pound field

const pounds = parseFloat(txtPounds.value);
//calculate euros
const noOfEuros = pounds * euroRate;

//output euros in output field
txtOutput.innerText = `£${pounds.toFixed(2)} is worth ${noOfEuros.toFixed(2)}`;
}


//when yen button clicked
function convertYen(){
    console.log("yen");
//set yen rate to 163.61
const yenRate = 163.61;

//read pounds from pound field
const pounds = parseFloat(txtPounds.value)

//calculate yen
const noOfYen = pounds * yenRate;
//output yen in output field
txtOutput.innerText = `£${pounds.toFixed(2)} is worth ${noOfYen.toFixed(2)}`;

}