// const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// console.log(date.toLocaleDateString());
// var date2 = "2022-04-10";


// // funcion para cuando la llamada es exitosa
// function exito() {
//     var datos = JSON.parse(this.responseText); //convertir a JSON
//     console.log(datos);
//     console.log(datos['holidays'][0]['observed']);
//     console.log(datos);
//     console.log("///////////////////////////////////////");
//     for (var i = 0; i < (Object.keys(datos['holidays']).length); i++) {
//         console.log(i+ ": " +datos['holidays'][i]['observed']);
//         if (datos['holidays'][i]['observed'] == date2) {
//             console.log("fecha igualada");
//             break;
//         }
//       }
//     console.log("///////////////////////////////////////");
// }

// // funcion para la llamada fallida
// function error(err) {
//     console.log('Solicitud fallida', err); //los detalles en el objecto "err"
// }

// var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
// xhr.onload = exito; // llamar a la funcion exito si exitosa
// xhr.onerror = error;  // llamar a la funcion error si fallida
// xhr.open('GET', 'https://holidayapi.com/v1/holidays?pretty&key=23c96630-434d-4e8a-aa1b-a617299b6be8&country=MX&year=2022&&language=es'); // Abrir solicitud GET
// xhr.send(); // mandar la solicitud al vervidor.



////////////////////////////////////////////////////////////////////////////////////////


var date = new Date();
var datef = date.toISOString().split('T')[0];
let year = date.getFullYear();
//funcion para restar dias a la fecha
Date.prototype.addDays =
    function(noOfDays) {
        var tmpDate = new Date(this.valueOf());
        tmpDate.setDate(tmpDate.getDate() + noOfDays);
        var dateff = tmpDate.toISOString().split('T')[0];
        return dateff;
    };
// funcion para cuando la llamada es exitosa
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
// funcion para la llamada fallida
function error(err) {
    console.log('Solicitud fallida', err); //los detalles en el objecto "err"
}
var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
xhr.onload = exito; // llamar a la funcion exito si exitosa
xhr.onerror = error;  // llamar a la funcion error si fallida
xhr.open('GET', 'https://holidayapi.com/v1/holidays?pretty&key=23c96630-434d-4e8a-aa1b-a617299b6be8&country=MX&year='+(year-1)+'&&language=es'); // Abrir solicitud GET
xhr.send(); // mandar la solicitud al vervidor.




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
