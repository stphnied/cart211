"use strict";

const
    bReturn = d.querySelector(".return-btn");

// Add click event to the return sign
bReturn.addEventListener("click", returnShop);

// Functions to return to the shop
function returnShop() {

    shopContainer.style.display = "grid";
    newsContainer.style.display = "none";
    // playShopSound();

    // Display none for all tvs
    for (let i = 0; i < aNews.length; i++) {
        aNews[i].style.display = "none";
        stopVideo(i);
    }
}

// Function that reloads and plays the video selected
function playVideo(i) {
    let currentVid = d.querySelectorAll("video")[i];
    currentVid.load();
    currentVid.play();
    currentVid.volume = 0.3;
    currentVid.loop = true;
}

// Function that pauses the video selected
function stopVideo(i) {
    let currentVid = d.querySelectorAll("video")[i];
    currentVid.pause();
}


