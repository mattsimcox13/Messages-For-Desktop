const {app, BrowserWindow} = require('electron')
const path = require('path')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1200, height: 900,
      icon: path.join(__dirname, 'assets/icon/messenger.png')})

    // Hide menu
    win.setMenu(null);

    // Set title
    win.setTitle('Messages For Desktop'); //during load
    win.webContents.on('did-finish-load', () => {
      win.setTitle('Messages For Desktop') //and after
    })

    // Can use this to push notifications potentially
    win.webContents.on('page-title-updated', () => {
      win.setTitle('Messages For Desktop') //and stay that way

      // Send notification (hacked in here, hopefully not permanent)
      
    })

    // and load the index.html of the app.
    win.loadURL('https://messages.android.com/')
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', function () {
    app.quit();
  })
