require('electron');
const path = require('path')
const remote = require("electron").remote
const BrowserWindow = remote.BrowserWindow

function openPopup(nameOfButton, nameOfurl) {
    let isLogin = localStorage.getItem('isLogin');
    console.log(isLogin)
    if(isLogin === 'false'){
        const notifyBtn = document.getElementById(nameOfButton)
        notifyBtn.addEventListener('click', function (e) {
            
            //without this, clicking profile button triggers one more than it was before so it stacks windows.
            e.stopImmediatePropagation();
            console.log('clicked')
            e.preventDefault()
            const modalPath = path.join('file://', __dirname, nameOfurl)
            let win = new BrowserWindow({ width: 400, height: 200, frame:false, alwaysOnTop: true, transparent:true, show:false })
            win.setAlwaysOnTop(true)
            win.webContents.openDevTools();
            win.on('close', function () { win = null })
            win.loadURL(modalPath)
            win.setResizable(false);
            win.setSize(400, Math.ceil(200), false);
            win.on('ready-to-show', () => {
                win.show()
            })
        })
        
    }else{
        console.log('already login')
    }
}

