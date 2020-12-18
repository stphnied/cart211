// functions for the tutorial ---------------------------------------------------------------------------------
"use strict";

// const sound = new Audio('sound.wav');
let d = document;

let pos = 0;
let dinoH = 0;
let dinoV = 0;

let bunH = 0;
let bunV = 0;

let sImg = d.getElementById(`thegirl`);
let sImg2 = d.getElementById(`thedino`);
let sImg3 = d.getElementById(`thebunny`);
let flexElems = d.getElementsByClassName("flexelem");

let dinoMadeIt = false;
let dinoDrag = false;

let bunVvel = 0;
let bunHVel = 0;

setInterval(movePicture, 20);
setInterval(updatePos, 20);
d.addEventListener("keydown", keyboard);
d.addEventListener("keyup", onKeyUp);
d.addEventListener("mousemove", onMouseMove);

if (typeof (window.localStorage) != "undefined") {
    bunH = parseInt(window.localStorage.getItem("bunH"));
    bunV = parseInt(window.localStorage.getItem("bunV"));
}

// FUNCTIONS ---------------------------------------------------------------------------------
function onLoad() {
    sImg.style.position = "relative";
    sImg2.style.position = "absolute"; //for click and drag
    sImg3.style.position = "relative";

    sImg2.addEventListener("dragstart", cancelDrag);


    sImg3.style.left = bunH + "px";
    sImg3.style.top = bunV + "px";
}

function myFunction() {
    let h1 = d.getElementById('myId');
    h1.innerHTML = "New H1!";
    h1.style.fontSize = "5em";
    d.getElementById('disappear').style.display = "none";
}

function movePicture() {
    if (pos >= 100) {
        clearInterval(movePicture);
    } else {
        pos++;
        sImg.style.left = pos + "px";

        for (let i = 0; i < flexElems.length; i++) {
            flexElems[i].style.left = pos + "px";
        }
    }
}

function keyboard(parameter) {
    // left
    if (parameter.keyCode == 65) {
        bunHVel = -1
    } else if (parameter.keyCode == 68) {
        bunHVel += 1;
    } else if (parameter.keyCode == 87) {
        bunVvel -= 1;
    } else if (parameter.keyCode == 83) {
        bunVvel += 1;
    }

    // sImg3.style.left = bunH + "px";
    // sImg3.style.top = bunV + "px";

    if (bunH >= 300 && !dinoMadeIt) {
        window.alert("u made it");
        dinoMadeIt = true;
    }
}

function onKeyUp(parameter) {
    if (parameter == 65 || parameter == 68) {
        bunHVel = 0;
    } else if (parameter == 87 || parameter == 83) {
        bunVvel = 0;
    }

}

function drag() {
    dinoDrag = true;

}

function drop() {
    dinoDrag = false;
}

function cancelDrag() {
    return false;
}

function updatePos() {

    bunH += bunHVel;
    bunV += bunVvel;

    sImg3.style.left = bunH + "px";
    sImg3.style.top = bunV + "px";

    window.localStorage.setItem("bunH", bunH);
    window.localStorage.setItem("bunV", bunV);
}

function onMouseMove(event) {
    if (dinoDrag) {
        dinoV = event.pageY - 75;
        dinoH = event.pageX - 75;

        sImg2.style.left = dinoH + "px";
        sImg2.style.top = dinoV + "px";
    }
}