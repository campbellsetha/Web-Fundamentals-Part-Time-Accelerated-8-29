var count_1 = 0;
var count_1Ele = document.querySelector("#count_1");
var count_2 = 0;
var count_2Ele = document.querySelector("#count_2");
var count_3 = 0;
var count_3Ele = document.querySelector("#count_3");



function add_1() {
    count_1++;
    count_1Ele.innerText = count_1 + " like(s)";
}

function add_2() {
    count_2++;
    count_2Ele.innerText = count_2 + " like(s)";
}

function add_3() {
    count_3++;
    count_3Ele.innerText = count_3 + " like(s)";
}