
const bemVindo = document.querySelector('.cabecalho-texto-titulo')

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