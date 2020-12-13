"use strict";

// Variables
const
    d = document,
    aTvs = d.querySelectorAll(`.tvs`),
    aNews = d.querySelectorAll(".news"),
    aVids = d.querySelectorAll(".old-news div video:nth-of-type(1)"),
    shopContainer = d.querySelector("#shopContainer"),
    newsContainer = d.querySelector("#newsContainer"),
    doorSFX = new Audio("assets/sounds/doorbell.mp3"),
    shopSFX = new Audio("assets/sounds/shopAmbience.mp3");


// Add click event to the shop's sign
d.querySelector("#sign").addEventListener("click", shopState);

// Function allowing to switch the sign's image
function shopState() {
    let imgSign = d.getElementById("sign");
    let imgDoor = d.querySelector(".door_center");

    // When the shop is opened
    if (imgSign.getAttribute('src') == "assets/sign-closed.png") {

        // Sign img closed -> open
        imgSign.src = "assets/sign-open.png";
        imgDoor.src = "assets/door-open.png";

        playShopSound();
        selectTvNews();

        // Opens TVs
        for (let i = 0; i < aTvs.length; i++) {
            aTvs[i].classList.add("active");
        }
    }

    // When the shop is closed
    else if (imgSign.getAttribute('src') == "assets/sign-open.png") {

        imgSign.src = "assets/sign-closed.png";
        imgDoor.src = "assets/door-closed.png";
        stopShopSound();

        // Closes TVs
        for (let i = 0; i < aTvs.length; i++) {
            aTvs[i].classList.remove("active");
        }
    }
}

// Function that allows user to select a tv channel
function selectTvNews() {
    for (let i = 0; i < aTvs.length; i++) {
        // add click event
        aTvs[i].addEventListener("click", function () {

            // hides shop, displays individual tv
            shopContainer.style.display = "none";
            newsContainer.style.display = "block";
            // stops shop bg noise
            stopShopSound();

            // Displaying one tv channel
            aNews[i].style.display = "none";
            switch (i) {
                case 0:
                    aNews[0].style.display = "flex";
                    playVideo(0);
                    break;
                case 1:
                    aNews[1].style.display = "flex";
                    playVideo(1);
                    break;
                case 2:
                    aNews[2].style.display = "flex";
                    playVideo(2);
                    break;
                case 3:
                    aNews[3].style.display = "flex";
                    playVideo(3);
                    break;
                case 4:
                    aNews[4].style.display = "flex";
                    playVideo(4);
                    break;
                case 5:
                    aNews[5].style.display = "flex";
                    playVideo(5);
                    aVids[1].style.margin = "0 0 0 5rem";
                    aVids[1].style.width = "835px"
                    break;
                case 6:
                    aNews[6].style.display = "flex";
                    playVideo(6);
                    break;
                case 7:
                    aNews[7].style.display = "flex";
                    playVideo(7);
                    break;
                case 8:
                    aNews[8].style.display = "flex";
                    playVideo(8);
                    break;
            }
        });
    }
}

// Plays sounds when the shop is open
function playShopSound() {
    // Play doorbell sound
    doorSFX.play();
    doorSFX.volume = 0.2;

    // Play shop background noises
    shopSFX.load();
    shopSFX.play();
    shopSFX.loop = true;
    shopSFX.volume = 0.4;
}

// Stops the shop bg noises
function stopShopSound() {
    shopSFX.pause();
}