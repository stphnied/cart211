// functions for the tutorial ---------------------------------------------------------------------------------
"use strict";

// const sound = new Audio('sound.wav');
let d = document;

let pos = 0;
let dinoH = 0;
let dinoV = 0;

let sImg = d.getElementById(`thegirl`);
let sImg2 = d.getElementById(`thedino`);

let dinoMadeIt = false;
let dinoDrag = false;

setInterval(movePicture, 20);
d.addEventListener("keydown", keyboard);
d.addEventListener("keyup",onKeyUp);
d.addEventListener("mousemove", onMouseMove);


// FUNCTIONS ---------------------------------------------------------------------------------
function onLoad() {
    sImg.style.position = "relative";
    sImg2.style.position = "absolute"; //for click and drag

    sImg2.addEventListener("dragstart",cancelDrag);
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
    }
}

function keyboard(param) {
    if (param.keyCode == 65) {
        dinoH -= 5;
    } else if (param.keyCode == 68) {
        dinoH += 5;
    } else if (param.keyCode == 87) {
        dinoV -= 5;
    } else if (param.keyCode == 83) {
        dinoV += 5;

    }
    sImg2.style.left = dinoH + "px";
    sImg2.style.top = dinoV + "px";

    if (dinoH >= 300 && !dinoMadeIt) {
        window.alert("u made it");
        dinoMadeIt = true;
    }
}

function onKeyUp() {
    
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

function onMouseMove(event) {
    if(dinoDrag) {
        dinoV = event.pageY;
        dinoH = event.pageX;

        sImg2.style.left = dinoH + "px";
        sImg2.style.top = dinoV + "px";
    }


}