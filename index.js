// Offer Bar
var offerBar = document.querySelector(".offer-bar")
document.getElementById("offer-close").addEventListener("click", function(){
    offerBar.style.display="none"
})

// Side Nav Bar
var sideNavMenu = document.getElementById("side-navbar-activate")
var sideNavBar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function(){
    sideNavBar.style.marginLeft="0px"
})
document.getElementById("side-navbar-close").addEventListener("click", function(){
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

// Slider
var sliderLeft = document.getElementById("slider-left-activate")
var sliderRight = document.getElementById("slider-right-activate")
var sliderImage = document.querySelector(".slider-image-container")
var sliderMargin = 0

sliderRight.addEventListener("click", function(){
    sliderMargin = sliderMargin + 100
    if(sliderMargin>200)
    {
        sliderMargin=0
        sliderImage.style.marginLeft=0;
    }
    else{
        sliderImage.style.marginLeft="-"+sliderMargin+"vw";
    }
})










