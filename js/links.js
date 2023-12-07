let listado = document.querySelectorAll(".url")

listado.forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    event.preventDefault()
    //alert(elemento.href)
    let text = "Seras redireccionado a un host gratuito donde se aloja temporalmente el portafolio con funciones backend \n¿Deseas continuar?";
    if (confirm(text) == true) {
        location.href=elemento.href;;
    } else {
        text = "Preferiste permanecer aqui...";
    }
  })
})