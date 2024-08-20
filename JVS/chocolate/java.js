const btnWhite = document.getElementById("white");
const btnMilk = document.getElementById("milk");
const btnDark = document.getElementById("dark");
const btnResults = document.getElementById("results")
const txtOutput = document.getElementById("output");


btnWhite.addEventListener("click" , white);
btnMilk.addEventListener("click" , milk);
btnDark.addEventListener("click" , dark);
btnResults.addEventListener("click" , results);

let rwhite = 0;
let rmilk = 0;
let rdark = 0;

function white(){
    console.log("white");

    rwhite += 1;
}

function milk(){
 console.log("milk");
    rmilk += 1;
}

function dark(){
    console.log("dark");
    rdark += 1;
}

function results(){
    console.log("results")
    txtOutput.innerText = `Votes of white: ${rwhite}\n
    votes for milk: ${rmilk}\n
    votes for dark:${rdark}`
}
