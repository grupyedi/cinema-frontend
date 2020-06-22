const { remote } = require("electron");

function moveToChooseCinema() {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    console.log(username + " " + password);
    if(username === "foo" && password === "123"){
        localStorage.setItem('isLogin', 'true')
        window.open('', '_self', '');
        window.close();
        return true;
    }else{
        return false;
    }
    //if returns true, moves second page which make us choose cinema saloons but if
    // returns false, make us perform inside this function
}