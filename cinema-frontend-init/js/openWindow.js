require('electron');
const path = require('path')
const remote = require("electron").remote
const BrowserWindow = remote.BrowserWindow

function openWindow(nameOfButton, nameOfurl) {
    const notifyBtn = document.getElementById(nameOfButton)
    notifyBtn.addEventListener('click', function (e) {
        //without this, clicking profile button triggers one more than it was before so it stacks windows.
        e.stopImmediatePropagation();
        console.log('clicked')
        e.preventDefault()
        const modalPath = path.join('file://', __dirname, nameOfurl)
        let win = new BrowserWindow({ width: 400, height: 200, frame:false, alwaysOnTop: true, transparent:true })
        win.setAlwaysOnTop(true)
        win.on('close', function () { win = null })
        win.loadURL(modalPath)
        win.setSize(400, Math.ceil(200), false);
        win.show()
    })

}

function goToLogin() {
//TODO : this will open login page
}
