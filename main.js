const {app, BrowserWindow} = require('electron')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1200, height: 900,
      icon: 'assets/icon/messenger.png'})

    // Hide menu
    win.setMenu(null);

    // and load the index.html of the app.
    win.loadURL('https://messages.android.com/')
  }

  app.on('ready', createWindow)
