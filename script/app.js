
const bemVindo = document.querySelector('.cabecalho-texto-titulo');
let menuImg = document.getElementById("menuImg");
let minhaDiv = document.querySelectorAll(".menu-container-item");


function typewriter(elemento) {
    const texto = elemento.innerHTML.split('')
    elemento.innerHTML = ' '
    texto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    });


}

typewriter(bemVindo)
clickImg(menuImg)


function abreFechaMenu() {
    minhaDiv.forEach(div => {
        
        if (!div.style.display) {

            div.style.display = "none"
            div.style.transition = ".8s"

        } else {
            div.style.display = ""
        }
    });
}

function clickImg(e) {
    e.addEventListener('click', abreFechaMenu)
}