const { app, BrowserWindow, remote } = require('electron')

let win;
function createWindow () {
     win = new BrowserWindow({
        width: 1366,
        height: 1000,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    win.loadFile('../pages/choosingCinema.html')

    win.webContents.openDevTools()

    win.setResizable(false);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})