import { createGlobalStyle } from 'styled-components'

const myGlobalStyle = createGlobalStyle`
:root, [data-bs-theme=light] {
    --bs-success-rgb: 21,31,9;
    

    /* --bs-success-rgb: rgb(21, 31, 9); */
}
/* @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Sarala:wght@400;700&display=swap'); */
/* font-family: 'Righteous', cursive;
font-family: 'Sarala', sans-serif; */
@import url('https://fonts.googleapis.com/css2? family= Exo:wght@300;400;600;700;800;900 & Montserrat+Alternates:wght@400;600;800 & family= Roboto: wght@400;700;900 & display=swap');

@keyframes pisca {
    0% {
        opacity: 1;
        color: black;
    }

    ;

    50% {
        opacity: 0;
    }

    ;

    100% {
        opacity: 1;
    }
}

body {
    font-family: 'Montserrat Alternates','Exo','Roboto',  sans-serif;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color:  #151F09;
    color: white;


}

.cabecalho-texto{
    padding-top: 100px;
    padding-bottom: 100px;
}

.Foto{
    height: 100px;
    /* display: block; */
    
    /* margin: auto;
    margin-top: 100px;*/
    margin-bottom: 100px; 
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
}
.saudacao::after {
    content: "|";
    margin-left: 5px;
    opacity: 1;
    animation: pisca .7s infinite;
    z-index: 0;
   
}


`
export default myGlobalStyle