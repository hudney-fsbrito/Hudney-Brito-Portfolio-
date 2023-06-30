import React from "react";


function Header(props) {
    return (
        <header className="cabecalho" id="topo">
            
            <div className="cabecalho-texto d-flex align-items-center">
                <img className="Foto " src={props.foto} alt="" />
                <div>

                <h1 className="cabecalho-texto-titulo">Olá! Seja bem vindo!</h1>
                <h2 className="cabecalho-texto-subtitulo">Sou Hudney Brito | Desenvolvedor Web</h2>
                <p className="cabecalho-texto-resumo">Aqui verá projetos que uso para praticar e que já participei.</p>
                </div>
            </div>
        </header>
    )
}

export default Header;