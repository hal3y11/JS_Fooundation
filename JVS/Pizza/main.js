//when page loads
//get references to interactive elements 
const optCrust = document.getElementById("crust");
const optToppings = document.getElementsByName("topping");
const optDelivery = document.getElementsByName("delivery");
const txtPrice = document.getElementById("price");

//listen for all events
optCrust.addEventListener("change", checkCrust);
optToppings.forEach(item => item.addEventListener("change", checkToppings));
optDelivery.forEach(item => item.addEventListener("change", checkDelivery));

//set crustCost to 4.99
let crustCost = 4.99;

//set toppingCost to 0.5
let toppingCost = 0.5;

//set deliveryCost to 0
let deliveryCost = 0;

//output cost (crustCost + toppingCost + deliveryCost) in output field
txtPrice.innerText = `£${(crustCost + toppingCost + deliveryCost).toFixed(2)}`;

function checkCrust() {
    let crust = optCrust.options[optCrust.selectedIndex].value;
    if (crust == "thin") {
        crustCost = 4.99;
    } else if (crust == "deep") {
        crustCost = 5.99;
    } else {
        crustCost = 6.99;
    }
    txtPrice.innerText = `£${(crustCost + toppingCost + deliveryCost).toFixed(2)}`;

}
function checkToppings() {
       if (this.checked) {
        toppingCost += 0.5;
    }
    else {
        toppingCost -= 0.5;
    }
    txtPrice.innerText = `£${(crustCost + toppingCost + deliveryCost).toFixed(2)}`;

}
function checkDelivery() {
    if (this.value == "collect") {
        deliveryCost = 0;
    } else {
        deliveryCost = 3.50;
    }
    txtPrice.innerText = `£${(crustCost + toppingCost + deliveryCost).toFixed(2)}`;
}
