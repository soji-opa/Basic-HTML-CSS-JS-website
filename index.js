let content1 = document.getElementById("html");
let content2 = document.getElementById("css");
let content3 = document.getElementById("js");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

const openHTML = ()=>{
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "#ff7846"
    btn2.style.color = "#000"
    btn3.style.color = "#000"
    content1.style.transitionDelay = "0.3s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0s"
}

const openCSS = ()=>{
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "#000"
    btn2.style.color = "#ff7846"
    btn3.style.color = "#000"
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0.3s"
    content3.style.transitionDelay = "0s"
}

const openJS = ()=>{
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    btn1.style.color = "#000"
    btn2.style.color = "#000"
    btn3.style.color = "#ff7846"
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0.3s"
}