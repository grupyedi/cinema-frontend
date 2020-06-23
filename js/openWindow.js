require('electron');
const path = require('path')
const remote = require("electron").remote
const BrowserWindow = remote.BrowserWindow

function checkIsLogin(){
    var isLogin = localStorage.getItem('isLogin');
    return isLogin === 'true';
}

function openPopup(nameOfButton, ifYes, ifNo) {
    console.log(checkIsLogin());
    const notifyBtn = document.getElementById(nameOfButton)
        notifyBtn.addEventListener('click', function (e) {
            if(checkIsLogin() === false){
                //without this, clicking profile button triggers one more than it was before so it stacks windows.
                e.stopImmediatePropagation();
                console.log('clicked')
                e.preventDefault()
                const modalPath = path.join('file://', __dirname, ifYes)
                let win = new BrowserWindow({ width: 400, height: 200, frame:false, alwaysOnTop: true, transparent:true, show:false, webPreferences: {
                    nodeIntegration:true
                } })
                win.setAlwaysOnTop(true)
                //win.webContents.openDevTools();
                win.on('close', function () { win = null })
                win.loadURL(modalPath)
                win.setResizable(false);
                win.setSize(400, Math.ceil(200), false);
                win.on('ready-to-show', () => {
                    win.show()
                })
            }else{
                let win = remote.getCurrentWindow()
                const modalPath = path.join('file://', __dirname, ifNo)
                win.loadURL(modalPath)
            }
        })
    
}