var cookie_alert = document.querySelector(".cookie-alert");
var high1 = document.querySelector("#high1");
var low1 = document.querySelector("#low1");
var high2 = document.querySelector("#high2");
var low2 = document.querySelector("#low2");
var high3 = document.querySelector("#high3");
var low3 = document.querySelector("#low3");
var high4 = document.querySelector("#high4");
var low4 = document.querySelector("#low4");

var temp = 0;

function hide() {
    cookie_alert.remove();
}

function converttoC() {

    temp = high1;
    high1.innerText = (temp-32) * (5/9);
    high2.innerText = (high2-32) * (5/9);
    high3.innerText = (high3-32) * (5/9);
    high4.innerText = (high4-32) * (5/9);
    low1.innerText = (low1-32) * (5/9);
    low2.innerText = (low2-32) * (5/9);
    low3.innerText = (low3-32) * (5/9);
    low4.innerText = (low4-32) * (5/9);
}

function converttoF() {

    temp = high1;
    high1.innerText = (temp * 9/5) + 32;
    high2.innerText = (high2 * 9/5) + 32;
    high3.innerText = (high3 * 9/5) + 32;
    high4.innerText = (high4 * 9/5) + 32;
    low1.innerText = (low1 * 9/5) + 32;
    low2.innerText = (low2 * 9/5) + 32;
    low3.innerText = (low3 * 9/5) + 32;
    low4.innerText = (low4 * 9/5) + 32;
}

alert("Loading weather report...");
