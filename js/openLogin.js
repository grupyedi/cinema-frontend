const { remote } = require('electron');

function openLoginPage(){
    let win = remote.getCurrentWindow();
    win.setSize(800,600,true)
    win.center()
    remote.BrowserWindow.getFocusedWindow().loadFile('../pages/loginScreen.html')
}

function closeScreen(){
    window.open('', '_self', '');
    window.close();
}
