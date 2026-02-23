//Event Listeners
let hitBtn = document.querySelector("#hit");
let resetBtn = document.querySelector("#reset");
let betBtn = document.querySelector("#bet");
let stayBtn = document.querySelector("#stay");

hitBtn.addEventListener("click", hitCard);
resetBtn.addEventListener("click", showBet);
betBtn.addEventListener("click",bet);
stayBtn.addEventListener("click",stay);

showBet();

let playerHandSum = 0;
let dealerHandSum = 0;
const face = ["King", "Queen", "Jack", "Ace"];

function showBet(){
    document.querySelector("#win").style.display = "none";
    document.querySelector("#lose").style.display = "none";
    resetBtn.style.display = "none";
    hitBtn.style.display = "none";
    stayBtn.style.display = "none";
    document.querySelector("#handLabel").style.display = "none";
    document.querySelector("#hand").style.display = "none";
    document.querySelector("#dealLabel").style.display = "none";
    document.querySelector("#dealHand").style.display = "none";
    document.querySelector("#betNum").style.display = "none";
    betBtn.style.display = "initial";
    document.querySelector("#betIn").style.display = "initial";
}

function bet(){
    let amount = document.querySelector("#betIn").value;
    document.querySelector("#betNum").style.display = "initial"
    document.querySelector("#betNum").textContent = "You bet: $" + amount;
    betBtn.style.display = "none"
    document.querySelector("#betIn").style.display = "none"
    startGame();
}

function startGame(){
    hitBtn.style.display = "initial";
    stayBtn.style.display = "initial";
    resetBtn.style.display = "none";
    document.querySelector("#handLabel").style.display = "initial";
    document.querySelector("#hand").style.display = "initial";
    document.querySelector("#dealLabel").style.display = "initial";
    document.querySelector("#dealHand").style.display = "initial";
    document.querySelector("#hand").textContent = "";
    document.querySelector("#dealHand").textContent = "";
    playerHandSum = 0;
    dealerHandSum = 0;
}


function stay(){
    dealerHit();
}

function hitCard(){
    let add = Math.floor((Math.random() * 13 - 1 + 1) + 1);
    playerHandSum += add;
    if (playerHandSum >= 21){
        document.querySelector("#lose").style.display = "initial";
        if(add == 1){
            document.querySelector("#hand").textContent += face[3] + " ";
        }
        else if(add == 11){
            document.querySelector("#hand").textContent += face[2] + " ";
        }
        else if(add == 12){
            document.querySelector("#hand").textContent += face[1] + " ";
        }
        else if(add == 13){
            document.querySelector("#hand").textContent += face[0] + " ";
        }
        else{
            document.querySelector("#hand").textContent += add + " ";
        }
        endGame();
        return;
    }
    else{
        if(add == 1){
            document.querySelector("#hand").textContent += face[3] + " ";
        }
        else if(add == 11){
            document.querySelector("#hand").textContent += face[2] + " ";
        }
        else if(add == 12){
            document.querySelector("#hand").textContent += face[1] + " ";
        }
        else if(add == 13){
            document.querySelector("#hand").textContent += face[0] + " ";
        }
        else{
            document.querySelector("#hand").textContent += add + " ";
        }
        
    }
    dealerHit();
}

function dealerHit(){
    let add = Math.floor((Math.random() * 13 - 1 + 1) + 1);
    dealerHandSum += add;

    if (dealerHandSum >= 21){
        document.querySelector("#win").style.display = "initial";
        if(add == 1){
            document.querySelector("#dealHand").textContent += face[3] + " ";
        }
        else if(add == 11){
            document.querySelector("#dealHand").textContent += face[2] + " ";
        }
        else if(add == 12){
            document.querySelector("#dealHand").textContent += face[1] + " ";
        }
        else if(add == 13){
            document.querySelector("#dealHand").textContent += face[0] + " ";
        }
        else{
            document.querySelector("#dealHand").textContent += add + " ";
        }
        endGame();
        return;
    }
    else{
        if(add == 1){
            document.querySelector("#dealHand").textContent += face[3] + " ";
        }
        else if(add == 11){
            document.querySelector("#dealHand").textContent += face[2] + " ";
        }
        else if(add == 12){
            document.querySelector("#dealHand").textContent += face[1] + " ";
        }
        else if(add == 13){
            document.querySelector("#dealHand").textContent += face[0] + " ";
        }
        else{
            document.querySelector("#dealHand").textContent += add + " ";
        }
    }
}

function endGame(){
    hitBtn.style.display = "none";
    stayBtn.style.display = "none";
    resetBtn.style.display = "initial";
}
