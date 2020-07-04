document.getElementById("close").addEventListener("click", function(){
    var menu = document.querySelector("#navbarText");
    var body = document.querySelector(".body");

    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "flex";
    }
    else{
        menu.style.display = "none";
    }
});