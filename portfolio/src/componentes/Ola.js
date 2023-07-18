import { useEffect, useState } from "react";


function Ola(props) {
    let [ola, setOla] = useState("")
    const texto = props.saudacao.split('')

    useEffect(()=>{

        typewriter(texto)
        
    },[])
    
    
    function typewriter(texto) {
        // setOla(texto)
        
        texto.map((letra, i) => (
            setTimeout(() => {
                
                setOla(ola += letra)

            }, 100 * i)
        ))
    }

    return (
        <div>
            <h1 className="saudacao" onLoad={typewriter}>{ola}</h1>
        </div>


    )
    // function typewriter(elemento) {
    //     const texto = elemento.innerHTML.split('')
    //     elemento.innerHTML = ' '
    //     texto.forEach((letra, i) => {
    //         setTimeout(() => {
    //             elemento.innerHTML += letra;
    //         }, 75 * i)
    //     });

    // }

    // typewriter(bemVindo)
}

export default Ola;