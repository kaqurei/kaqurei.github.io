function hamburgerMenu(){

   var button = document.getElementById("menu-link");
    var count = +1;

  if (count % 2 == 1) {
    document.getElementById('menu').style.display = "block";
    document.getElementById('menu').padding = "0px 0px 0px 0px";
}
 else {
    document.getElementById('menu').style.display = "none";
}
}