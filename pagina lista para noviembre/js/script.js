const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
month=10;
var i = Math.floor(Math.random() * 7);
if (i==0) {
    i++;
}
if ((month == 10 && day > 20) || (month == 11 && day < 8) ) {
    let text = document.getElementById("estilo").innerHTML; 
    document.getElementById("estilo").innerHTML = text.replace("images/1.jpg", "images/dia_de_muertos/"+i+".jpg");

}else if (month == 11) {
    //document.getElementById("inc").innerHTML = "<link rel='stylesheet' href='style/style2.css'>"
}


