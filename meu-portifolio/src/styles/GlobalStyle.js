import { createGlobalStyle } from "styled-components";

const MyGlobalStyle = createGlobalStyle`

:root{
  /* #525252 container  */
  /* #232323 card */
  /* #000 body */
  /* Azul dos botões #00A9D4 */
  --primary-color: #202022;
  --second-color: #232323;
  --tertiary-color: #94D3F2;
  --quaternary-color: #1D8ACF;

  --button-color: #00A9D4;
  
  --bg-primary: var(--primary-color);
  --bg-second: linear-gradient(45deg,var(--tertiary-color)10%, var(--quaternary-color)) ;
  --bg-tertiary: #000;
  --text-primary-color: #fff;
  
}

#root {
  /* max-width: 1280px; */
  margin: 0 auto;
  /* padding: 2rem; */
  text-align: center;
}

*{
  margin: 0 ;
  font-family: Helvetica, Arial, sans-serif;
  
}

body{
  /* background-color: var(--bg-tertiary); */
  background: var(--primary-color);
}

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    
}




`

export default MyGlobalStyle

