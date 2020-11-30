// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

var overlay = document.getElementById("overlay");
var close = document.getElementById("close");
if (close !== null) {
    close.addEventListener('click', closePopup);
}
if (overlay !== null) {
    overlay.addEventListener('click', closePopup)
}

function closePopup(ev) {
    if (ev.target === overlay || ev.target === close) {
        overlay.style.display = 'none';
    }
}