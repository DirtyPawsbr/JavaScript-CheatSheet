function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

function jsChange(){
    document.getElementById("change").innerHTML = "Changed!";
}

function deleteMe(){
    document.getElementById("delete").innerHTML = "";
}

function myPower(){
    document.getElementById("power").innerHTML = "Javascript, you are great!"
}

let a=document.getElementById("fan2");
function myFunOn() {
    a.style.animationDuration = 3+"s";
}
function myFunOff() {
   a.style.animationDuration= 0+"s";
}
function myFun1(){
   a.style.animationDuration= 3+"s";
}
function myFun2(){
    a.style.animationDuration= 2+"s";
 }
 function myFun3(){
    a.style.animationDuration= 1+"s";
 }