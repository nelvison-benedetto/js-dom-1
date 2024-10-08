const btn_lamp = document.querySelector("div button");
const img_lamp = document.getElementById("img_lamp"); //faster than querySelector("#...")

isOn = false;
path_lamp = "./assets/img/";
lamp_white = "white_lamp.png";
lamp_yellow = "yellow_lamp.png";
function turnOnOff() {
    if (!isOn){ isOn=true; img_lamp.src= path_lamp+lamp_yellow;}
    else { isOn=false; img_lamp.src= path_lamp+lamp_white;}
}

btn_lamp.addEventListener("click", turnOnOff);