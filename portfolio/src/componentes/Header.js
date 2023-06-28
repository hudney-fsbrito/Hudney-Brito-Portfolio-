import React from "react";
import MenuBar from "./MenuBar";

function Header(props) {
    return (
        <header className="cabecalho" id="topo">
            <MenuBar ></MenuBar>
            <div className="cabecalho-texto">
                <img className="Foto " src={props.foto} alt="" />
                <h1 className="cabecalho-texto-titulo">Olá! Seja bem vindo!</h1>
                <h2 className="cabecalho-texto-subtitulo">Sou Hudney Brito | Desenvolvedor Web</h2>
                <p className="cabecalho-texto-resumo">Aqui verá projetos que uso para praticar e que já participei.</p>
            </div>
        </header>
    )
}

export default Header;