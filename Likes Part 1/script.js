var count = 0;
var countEle = document.querySelector("#count");

function add() {
    count++;
    countEle.innerText = count + " like(s)";
}