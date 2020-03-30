var appleLogo = document.getElementById("appleLogo");
var appleWindow = document.getElementById("appleWindow");

var androidLogo = document.getElementById("androidLogo");
var androidWindow = document.getElementById("androidWindow");

appleLogo.addEventListener("click", appleClick);
androidLogo.addEventListener("click", androidClick);



function appleClick() {
    appleWindow.style.visibility = "visible";
    appleLogo.style.visibility = "hidden";
}

function androidClick() {
    androidWindow.style.visibility = "visible";
    androidLogo.style.visibility = "hidden";
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "5px 0px";
        document.getElementById("header").style.fontSize = "1.3em";
        document.getElementById("secondHeader").style.display = "none";
    } else {
        document.getElementById("navbar").style.padding = "15px 0px";
        document.getElementById("header").style.fontSize = "1.4em";
        document.getElementById("secondHeader").style.display = "block";
    }
} 