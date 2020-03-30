var swapperApp = document.getElementById("bild1");
var swapperScreen = document.getElementById("bild2");
var swapperDesc = document.getElementById("swapperDesc");

swapperApp.addEventListener("click", swapperClick);

function swapperClick() {
    swapperScreen.style.visibility = "visible";
    swapperScreen.style.transform = "scale(1.1)";
    swapperDesc.style.visibility = "visible";
}

var weatherApp = document.getElementById("bild3");
var weatherScreen = document.getElementById("bild4");
var weatherDesc = document.getElementById("weatherDesc");

weatherApp.addEventListener("click", weatherClick);

function weatherClick() {
    weatherScreen.style.visibility = "visible";
    weatherScreen.style.transform = "scale(1.1)";
    weatherDesc.style.visibility = "visible";
}

var whataMessApp = document.getElementById("bild5");
var whataMessScreen = document.getElementById("bild6");
var whataDesc = document.getElementById("whataDesc");

whataMessApp.addEventListener("click", whataMessClick);

function whataMessClick() {
    whataMessScreen.style.visibility = "visible";
    whataMessScreen.style.transform = "scale(1.1)";
    whataDesc.style.visibility = "visible"
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "5px 0px";
        document.getElementById("header").style.fontSize = "1.3em";
        document.getElementById("secondHeader").style.display ="none";
    } else {
        document.getElementById("navbar").style.padding = "15px 0px";
        document.getElementById("header").style.fontSize = "1.4em";
        document.getElementById("secondHeader").style.display = "block";
    }
} 