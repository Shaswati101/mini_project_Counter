const decButton = document.getElementById("decButton");
const incButton = document.getElementById("incButton");
const resetButton = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

incButton.onclick = function(){
    count++;
    countLabel.textContent = count;
    
}
decButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetButton.onclick = function(){
    count=0;
    countLabel.textContent = count;
}