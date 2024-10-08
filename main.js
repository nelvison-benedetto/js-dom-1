const btn_lamp = document.querySelector("div button");
const img_lamp = document.getElementById("img_lamp"); //faster than querySelector("#...")

isOn = false;
function turnOnOff() {
    //img_lamp.src = "./assets/img/yellow_lamp.png";

    if (!isOn){ isOn=true; img_lamp.src= "./assets/img/yellow_lamp.png";}
    else { isOn=false; img_lamp.src= "./assets/img/white_lamp.png";}
}

btn_lamp.addEventListener("click", turnOnOff);