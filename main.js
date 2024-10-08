const btn_lamp = document.querySelector("div button");
const img_lamp = document.getElementById("img_lamp"); //faster than querySelector("#...")

function turnOnOff() {
    console.log("on off test");
    img_lamp.src = "./assets/img/yellow_lamp.png";
}

btn_lamp.addEventListener('click', turnOnOff);