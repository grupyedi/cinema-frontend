function moveToChooseCinema() {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    console.log(username + " " + password);
    return username === "melihcanclk" && password === "123";
    //if returns true, moves second page which make us choose cinema saloons but if
    // returns false, make us perform inside this function
}