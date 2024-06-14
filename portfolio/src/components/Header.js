import React from "react";
import Ola from "./Ola";
import MenuBar from "./MenuBar";
import MenuDropdown from "./MenuDropdown";


function Header(props) {


    return (
        <>
            <MenuDropdown></MenuDropdown>
            <MenuBar links={["Início", "Projetos", "Sobre", "Contato"]}></MenuBar>
            <header className="cabecalho" id="topo">
                <div className="cabecalho-texto d-flex flex-column flex-md-row justify-content-md-evenly align-items-center">
                    <img className="Foto" src={props.foto} alt="" />
                    <div>
                        <Ola saudacao={"Olá! Sou Hudney Brito"}></Ola>
                        <h2 className="cabecalho-texto-subtitulo">Desenvolvedor Web</h2>
                        <p className="cabecalho-texto-resumo">Aqui verá projetos que uso para praticar e que já participei.</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;