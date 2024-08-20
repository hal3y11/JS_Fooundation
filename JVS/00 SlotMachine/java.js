const txtCreditValue = document.getElementById('creditValue');
const txtWinningValue = document.getElementById('winningsValue');
const btnSpin = document.getElementById('spin');
const btnCredit = document.getElementById('credit');
const btnCollect = document.getElementById('collect');
const txtMessage = document.getElementById(`output`);
const reel1 = document.getElementById(`reel1`);
const reel2 = document.getElementById(`reel2`);
const reel3 = document.getElementById(`reel3`);

//listen for all events
btnSpin.addEventListener('click', Spin);
btnCredit.addEventListener('click', Credit);
btnCollect.addEventListener('click', Collect);

//set credit value
let creditValue = 0;

//set winning value
let winningsValue = 0;


function Spin() {
    console.log("Spin")
    if (creditValue > 0) {
        let slot1 = Math.floor(Math.random() * 3);
        let slot2 = Math.floor(Math.random() * 3);
        let slot3 = Math.floor(Math.random() * 3);

        reel1.setAttribute("src", `images/animal` + slot1 + ".png");
        reel2.setAttribute("src", `images/animal` + slot2 + ".png");
        reel3.setAttribute("src", `images/animal` + slot3 + ".png");


        if (slot1 == slot2 & slot2 == slot3) {
            winningsValue += 20;
            txtWinningValue.innerText = winningsValue;
            txtMessage.innerText = `You Won £20`;
        }
        else if (slot2 == slot3) {
            winningsValue += 10;
            txtWinningValue.innerText = winningsValue;
            txtMessage.innerText = `You Won £10`;
        }
        else {
            txtMessage.innerText = `You lost`;
        }

        creditValue --;
        txtCreditValue.innerText = creditValue;
      
    } else {
        txtMessage.innerText = `Insufficent Credit`;
        if (creditValue = 0){
            document.getElementById("spin").disabled = true;
        } 
    }

}
function Credit() {
    console.log("credit")
    txtMessage.innerText = `+ 1 credit`;
    creditValue ++;
    txtCreditValue.innerText = creditValue ;
}


function Collect() {
    console.log("collect")
    if (winningsValue > 0) {
        txtMessage.innerText = `You have collected £${winningsValue}`;
        winningsValue = 0;
        txtWinningValue.innerText = winningsValue;
        if(winningsValue = 0)
        document.getElementById("collect").disabled = true;
    } else {
        
        txtMessage.innerText = `Insufficent credit to collect`;
    }

}

