// TODO: IDFK, keep trying ipcRenderer, ipcMain and remote I guess
// NOTE: Try the following:
/*
  https://www.w3schools.com/js/js_htmldom_events.asp
  https://medium.freecodecamp.org/how-to-build-your-first-app-with-electron-41ebdb796930
  https://www.christianengvall.se/ipcmain-and-ipcrenderer/
*/
const {ipcRenderer} = require('electron')

// DIS SHIT WORKS
window.onclick = myFunction;

// If the user clicks in the window, set the background color of <body> to yellow
function myFunction() {
    document.getElementById("okBtn").style.backgroundColor = "yellow";
}

// Can try the following either in this file or in script tags
// document.getElementById("about").addEventListener("click", function (e) {
//    ipcRenderer.send('show-about-window-event');
// }
