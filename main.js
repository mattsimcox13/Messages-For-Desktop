const {app, BrowserWindow, Tray} = require('electron')
const path = require('path')
const notifier = require('node-notifier')
const iconpath = path.join(__dirname, 'assets/icon/messenger.png')

// TODO: Minimize/maximize to tray
//       Tray icon for notifications on/off and quit
//       Fix icon/app title in notifications (currently snoreToast)

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1200, height: 900,
      icon: iconpath})

    // Hide menu
    win.setMenu(null);

    // Set title
    win.setTitle('Messages For Desktop'); //during load
    win.webContents.on('did-finish-load', () => {
      win.setTitle('Messages For Desktop') //and after
    })

    // Used to push notifications
    win.webContents.on('page-title-updated', () => {
      win.setTitle('Messages For Desktop') //and stay that way

      // Send notification (hacked in here, hopefully not permanent)
      // TODO: Class "lXNy8e  oLerdd zshGI INJlr" is for text div
      //       Text is in aria-label="" selector in the div
      //       See: https://stackoverflow.com/questions/285522/find-html-label-associated-with-a-given-input
      //       See: https://stackoverflow.com/questions/18949817/get-text-in-getelementsbyclassname
      if (!win.isFocused()) {
        notifier.notify({
          title: 'Messages for Desktop',
          message: 'You have a new message',
          icon: path.join(__dirname, 'assets/icon/messenger.png'),
          wait: true
        });
      }

      notifier.on('click', function(notifierObject, options) {
        win.show();
        win.focus();
      });

    })

    // and load the index.html of the app.
    win.loadURL('https://messages.android.com/')
  }

app.on('ready', createWindow)

  app.on('window-all-closed', function () {
    app.quit();
  })
