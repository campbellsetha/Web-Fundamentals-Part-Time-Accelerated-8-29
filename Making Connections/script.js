console.log("page loaded...");

var phile = document.querySelector("#phil_e");
var todds = document.querySelector("#todd_s");
var num = 0;
var badgeElementReq = document.querySelector("#req_badge");
var badgeElementConn = document.querySelector("#conn_badge");
var nam = "Sara Johnston";
var names = document.querySelector(".card-body h1");

function hide2() {
    phile.remove();
    num = badgeElementReq.innerText;

    if (num > 0) {
        num--;
        badgeElementReq.innerText = num;
    }
}

function hide1() {
    todds.remove();
    num = badgeElementReq.innerText;
    
    if (num > 0) {
        num--;
        badgeElementReq.innerText = num;
    }
}

function add() {
    num=badgeElementConn.innerText;
    num++;
    badgeElementConn.innerText = num;
}

function change(){
    names.innerText = nam;
}

