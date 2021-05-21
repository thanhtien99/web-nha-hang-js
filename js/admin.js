
function onloadAdmin(){
    var users = JSON.parse(localStorage.getItem("users")) || 0;
    var menu = JSON.parse(localStorage.getItem("menu")) || 0;
    var ordersuccess = JSON.parse(localStorage.getItem("ordersuccess")) || 0;
    var coutUser = 0;
    var coutMenu = 0;
    var product = [];
    var oneproduct;
    var coutOrdersuccess = 0;
    for(i in users){
        coutUser++;
    }
    for(i in menu){
        for(j = 0; j < menu[i].list.length; j++){
            oneproduct = menu[i].list[j];
            product.push(oneproduct);
        }
    }
    for(i=0; i<product.length;  i++){
        coutMenu++;
    }
    for(i in ordersuccess){
        coutOrdersuccess++;
    }
    document.getElementById('coutUser').innerHTML = coutUser;
    document.getElementById('coutProduct').innerHTML = coutMenu;
    document.getElementById('coutOrder').innerHTML = coutOrdersuccess;
}