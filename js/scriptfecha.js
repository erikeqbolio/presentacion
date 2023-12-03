var date = new Date();
var datef = date.toISOString().split('T')[0];
let year = date.getFullYear();
Date.prototype.addDays =
    function(noOfDays) {
        var tmpDate = new Date(this.valueOf());
        tmpDate.setDate(tmpDate.getDate() + noOfDays);
        var dateff = tmpDate.toISOString().split('T')[0];
        return dateff;
    };
function exito() {
    var datos = JSON.parse(this.responseText); //convertir a JSON
    for (var i = 0; i < (Object.keys(datos['holidays']).length); i++) {
        if (datos['holidays'][i]['observed'] == date.addDays(-365)) {
            if (datos['holidays'][i]['public'] == false) {
                alert("Es día festivo laborable:\n\n"+datos['holidays'][i]['name']);
                break;
            }else{
                alert("Es día festivo no laborable:\n\n"+datos['holidays'][i]['name']+"\nDescansa");
                break;
            }

        }
      }      
}
function error(err) {
    console.log('Solicitud fallida', err);
}
function fecha(){
    var xhr = new XMLHttpRequest();
    xhr.onload = exito;
    xhr.onerror = error; 
    xhr.open('GET', 'https://holidayapi.com/v1/holidays?pretty&key=23c96630-434d-4e8a-aa1b-a617299b6be8&country=MX&year='+(year-1)+'&&language=es');
    xhr.send(); 
}
