const txtName = document.getElementById("name");
const optAnimal = document.getElementById("animal");
const txtTicketCost = document.getElementById("ticketCost");
const txtTicketsRequired = document.getElementById("ticketsRequired");
const optDelivery = document.getElementsByName("delivery");
const txtDeliveryCost = document.getElementById("deliveryCost");
const btnOrder = document.getElementById("order")
const txtOutput = document.getElementById("output")

//listen for all events
optAnimal.addEventListener("change", checkanimal);
optDelivery.forEach(item => item.addEventListener("change", checkdelivery));
btnOrder.addEventListener("click", TicketDetails);

//set ticket cost
let animalcost = 35.00;

//set delivery cost
let deliverycost = 0.00;

//set ticket output cost
txtTicketCost.innerText = `£${(animalcost).toFixed(2)}`;

function checkanimal() {
    let animal = optAnimal.options[optAnimal.selectedIndex].value;
    if (animal == "Penguins") {
        animalcost = 35.00;
    } else if (animal == "Monkeys") {
        animalcost = 27.00;
    } else if (animal == "Elephants") {
        animalcost = 31.00;
    } else {
        animalcost = 23.00;
    }
    txtTicketCost.innerText = `£${(animalcost).toFixed(2)}`;

}



function checkdelivery() {
    if (this.value == "eticket") {
        deliverycost = 0;
    } else if (this.value == "collect") {
        deliverycost = 1.75;
    } else {
        deliverycost = 4.50;
    }
    txtDeliveryCost.innerText = `£${(deliverycost).toFixed(2)}`;
}

function TicketDetails() {
    const name = txtName.value;
    const ticketsRequired = parseInt(txtTicketsRequired.value);
    const totalCost = (animalcost * ticketsRequired);
    let costAfterDiscount = 0;

   
   
    txtOutput.innerText = `Name:    ${name} 
  Ticket Cost:   £${(animalcost).toFixed(2)}
  No. of Tickets:  ${ticketsRequired}
  Delivery Cost:  £${(deliverycost).toFixed(2)}
 Total cost:   £${(totalCost).toFixed(2)}\n`;

 

    if (ticketsRequired >= 10) {
        discount = totalCost * 0.15
        console.log("work out and display discount for 15%")
        let costAfterDiscount = (totalCost - discount);
        let finalCost = (costAfterDiscount + deliverycost);
        txtOutput.innerText += `Discount: £${(discount).toFixed(2)} 
    Cost after discount: £${(costAfterDiscount).toFixed(2)} 
    Final Cost: £${(finalCost).toFixed(2)}`
     
    }
    else if (ticketsRequired >= 5) {
        discount = totalCost * 0.1
        console.log("work out and display discount for 10%")
        let costAfterDiscount = (totalCost - discount);
        let finalCost = (costAfterDiscount + deliverycost);
        txtOutput.innerText += `Discount: £${(discount).toFixed(2)} 
    Cost after discount: £${(costAfterDiscount).toFixed(2)} 
    Final Cost: £${(finalCost).toFixed(2)}`
    }
}
