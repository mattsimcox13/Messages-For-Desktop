// NOTE: Had to put onclick handler in the physical html connected to btn tag
const {ipcRenderer} = require('electron')

// Send code to main to close notWin browserWindow instance
function okBtn() {
  ipcRenderer.send('btnMessage', 'ok')
}

// Send code to main to close notWin broswerWindow instance and
// Reopen win, the main broswerWindow instance
function cancelBtn() {
  ipcRenderer.send('btnMessage', 'cancel')
}
