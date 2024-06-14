import styled from "styled-components";

const MeuMenuDropdown = styled.div`

padding-right: 1.5rem;

.menu{
  margin-top: 1rem;
  padding: 0;
  position: absolute;
}

.menu.active{
  opacity: 1;
  /* visibility: visible; */
  transition-duration: 1s;
}

.menu.desactive{
  opacity: 0;
  visibility: hidden;
}

.imgMenu{
  height: 25px;
  
  filter: invert();
  /* background-image: var(--bg-second); */
  /* background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  color: black;*/
  /* background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;  */

  /* -webkit-mask-image: var(--bg-second); */
}

.btnMenu{
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.btnMenu:active{
  opacity: .5;
  
}
ul{
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  transform: translateX(-50%);
}

li{
  border-bottom: 1px solid transparent;
  padding: .5em;
  cursor: pointer;
  text-align: end;
}
li:hover{
  border-bottom: 1px solid white;
}
a{
  text-decoration: none;
  color: var(--text-primary-color) ;
}


@media (min-width: 760px) {

  .menu{
  margin: 0;
  padding: 0;
  opacity: 1;
  position: relative;
  visibility: visible;
  
  }

  .menu.desactive{
  opacity: 1;
  visibility: visible;
  }

  .btnMenu{
  position: absolute;
  visibility: hidden;
  }
  
  ul{
    display: flex;
    transform: none;
    border-bottom: 1px solid transparent;
  }

  li:hover{
    border-bottom: 1px solid white;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  }


}

`

export default MeuMenuDropdown