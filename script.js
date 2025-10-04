let a = 0;
const CurrentAccount = document.getElementById("Currentbox1");
const CurrentCash = document.getElementById("Currentbox2");
const log = document.getElementById("output-box");
const Change = document.getElementById("Change");

function Change() {
    a++;
    const newText = `${a}, Current account Balance: ${CurrentAccount.value}, Current cash Balance: ${CurrentCash.value}\n`;
    log.value = newText + log.value; 
    
}