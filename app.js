const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');

const errorMessage = document.querySelector('.error-message');

const cashGivenDiv = document.querySelector('.cashGivenInput');
const changeReturnDiv = document.querySelector('.change-return');

const noOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];



checkButton.addEventListener('click', function  validateCashGiven(){
    clearNoOfNotes();
    hideMessage();
    if(Number(billAmount.value)>0 && Number(cashGiven.value)>0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            if(amountToBeReturned<1){
                showMessage("No amount should be returned");
                changeReturnDiv.style.display = "none";
            } else{
                calculateChange(amountToBeReturned);
            }
        } else{
            showMessage("Cash amount should be more than or equal to the bill amount");
        }
    } else{
        showMessage("Invalid input! Enter valid Bill Amount & Cash Given to continue");
    }  
});

function calculateChange(amountToBeReturned){
    changeReturnDiv.style.display = "block";
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

//if check button clicked without refreshing the page, clear the no of notes values on the screen
function clearNoOfNotes(){
    for(let notes of noOfNotes){
        notes.innerText = "";
    }
}

function hideMessage(){
    errorMessage.style.display = "none";
}

function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
    errorMessage.style.color = "red";
    changeReturnDiv.style.display = "none";
}