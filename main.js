var menu_list = ["Veggie Supereme Pizza","Cheese Pizza","Margherita Pizza","Hawaiian Pizza","Pepperoni Pizza"];

function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list.sort();
    for(var i=0;i<menu_list.length;i++){
        htmldata=htmldata+ '<li>' + menu_list[i] + '</li>'
    }
    htmldata=htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list.push(item);
    menu_list.sort();
    htmldata="<section class='cards' >"
    for(var l=0;l<menu_list.length;l++){
        htmldata=htmldata;'<div class="card">'; + '<img src="---"/>' +menu_list[l] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}