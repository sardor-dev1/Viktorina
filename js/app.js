let navBar = document.getElementById
("hamburger-btn");
let navList = document.getElementById 
("nav__list");
let bactop = document.getElementById 
("bactop")
let navshrink = document.getElementById
("navshrink")
let darkMode = document.getElementById 
("dark-mode")
let darkModeIcon = document.getElementById 
("dark-mode__icon")
let body = document.getElementById ("body")


window.addEventListener("scroll",function(){
    showBactop();
    showNavShrink();
})

navBar.addEventListener("click",function() {
    navList.classList.toggle("show-nav__list");
})

function showBactop(){
    if(scrollY>200){
        bactop.classList.add("show-bactop")
    }
    else{
        bactop.classList.remove("show-bactop")
    }
}

function showNavShrink(){
    if(scrollY > 0){
        navshrink.classList.add("show-navshrink")
    }
    else{
        navshrink.classList.remove("show-navshrink")
    }
}

darkMode.addEventListener("click",function() {
    darkModeIcon.classList.toggle("fa-sun");
    darkModeIcon.classList.toggle("fa-moon");
    body.classList.toggle("light")
})