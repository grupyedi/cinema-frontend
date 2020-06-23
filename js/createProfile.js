function show_images(id) { 
    var img = document.createElement("img");
    img.src = "../assets/bffehIaE_400x400[1].jpg";
    img.style.width = "100%";
    var src = document.getElementById(id);
    src.appendChild(img);
}  
function show_username(id){
    var src = document.getElementById(id);
    src.innerHTML = localStorage.getItem("username");
}
function get_points(id){
    var src = document.getElementById(id);
    src.innerHTML = 290;
}
function get_history(id){
    var parsed = "";
        var myObject = [{
            firstname: "Jane",
            lastname: "Doe",
            email: "jdoe@email.com"
        }, {
            firstname: "Ja",
            lastname: "joe",
            email: "je@email.com"
        }, {
            firstname: "Janet",
            lastname: "joes",
            email: "jsse@email.com"
        }];
        var text;
        
        text = "";
        for (var i = 0; i < myObject.length; i++) {
            text += "<tr><td><div class='product-item'><a class='product-thumb' href='#><img src='https://via.placeholder.com/220x180/FF0000/000000' alt='Product'></a><div class='product-info'>"
            text += "<h4 class='product-title'><a href='#'>" + myObject[i].firstname + " " + myObject[i].lastname + " " + myObject[i].email + "</a></h4>";
            text += "<div class='text-lg text-medium text-muted'>" + myObject[i].firstname +"</div></div></div></td>"
        }
        text += "</tr>";
        document.getElementById("history").innerHTML = text;
        
}

function logout(buttonId) {
    localStorage.clear()
    goBack()
}
function goBack() {
    window.history.back();
}