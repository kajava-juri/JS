function openMenu(id){
    var menu = document.getElementById('menu' + id);
    var menus = document.getElementsByClassName("menus");

    for (let i = 0; i < menus.length; i++) {
        if(id != i+1){
            menus[i].style.display = "none";
        }
    }

    if(menu.style.display == "contents"){
        menu.style.display = "none";
    } else {
        menu.style.display = "contents";
    }
}