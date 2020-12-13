"use strict";

const
    bReturn = d.querySelector(".return-btn"),
    bAddVol = d.querySelector("#plus-vol"),
    bSubVol = d.querySelector("#minus-vol");
let currentVid = d.querySelectorAll("video");

// Add click event to the return sign
bReturn.addEventListener("click", returnShop);
bAddVol.addEventListener("click", addVolume);
bSubVol.addEventListener("click", reduceVolume);

// Functions to return to the shop
function returnShop() {
    shopContainer.style.display = "grid";
    newsContainer.style.display = "none";
    playShopSound();

    // Display none for all tvs
    for (let i = 0; i < aNews.length; i++) {
        aNews[i].style.display = "none";
        stopVideo(i);
    }
}

// Function that reloads and plays the video selected
function playVideo(i) {
    currentVid[i].load();
    currentVid[i].play();
    currentVid[i].volume = 0.3;
    currentVid[i].loop = true;
}

// Function that pauses the video selected
function stopVideo(i) {
    currentVid[i].pause();
}

// Function that increases the volume of the video
function addVolume() {
    for (let i = 0; i < currentVid.length; i++) {
        
        if (!currentVid[i].paused) {
            currentVid[i].volume += 0.1;

            //Max volume is 1
            if (currentVid[i].volume >= 0.9) {
                currentVid[i].volume = 0.9;
            }
        }
        else {
            currentVid[i].volume = 0.3;
        }
    }
}

// Function that decreases the volume of the video
function reduceVolume() {
    for (let i = 0; i < currentVid.length; i++) {
        
        if (!currentVid[i].paused) {
            currentVid[i].volume -= 0.1;

            if (currentVid[i].volume <=0.1) {
                currentVid[i].volume = 0;
            }
        }
        else {
            currentVid[i].volume = 0.3;
        }
    }
}