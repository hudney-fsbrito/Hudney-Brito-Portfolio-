// import logo from './logo.svg';
// import React from 'react'
import './App.css';
import MenuBar from "./componentes/MenuBar";
import Header from './componentes/Header';
import Foto from "./componentes/assets/fone-embacado.png";


function App() {
    return (
        <div className='container bg-success'>
            <MenuBar></MenuBar>
            <Header foto={Foto}></Header>

            <main className="conteudo">
                <h2 id="projetos">Projetos</h2>
                <section className="conteudo-projeto">
                    <section className="conteudo-projeto-item">Em construção</section>
                    <section className="conteudo-projeto-item">Em construção</section>
                    <section className="conteudo-projeto-item">Em construção</section>
                    <section className="conteudo-projeto-item">Em construção</section>
                    <section className="conteudo-projeto-item">Em construção</section>
                </section>
                <div id="conteudo-sobreMim">

                    <div className="container-conteudo-informacao-conteudo-sobre" >
                        <section className="conteudo-informacao conteudo-sobre">
                            <h3 className="conteudo-titulo">Sobre mim</h3>
                            <p className="conteudo-texto">Apreciador das mais diversas artes e um grande admirador da
                                tecnologia. Um
                                “sonhador realista” que vislumbra uma utopia de um futuro harmônico entre a humanidade. Em
                                transição de carreira, volto a estudar na área que um dia almejei me capacitando com cursos
                                práticos oferecidos por diversas plataformas. Intenso e obstinado, tenho um objetivo
                                profissional de ser um desenvolvedor de software, campo de atividade no qual me despertou
                                interesse.</p>
                        </section>
                        <section className="conteudo-informacao conteudo-formacao">
                            <h3 className="conteudo-titulo">Formação</h3>
                            <p className="conteudo-texto">Análise e desenvolvimento de sistemas</p>
                        </section>
                        <section className="conteudo-informacao conteudo-curso">
                            <h3 className="conteudo-titulo">Cursos</h3>
                            <p className="conteudo-texto">Conhecimento em HTML5 e CSS3 / Conhecimentos em JavaScript /
                                Conhecimento
                                de Git e Github / Conhecimentos em Java / Conhecimentos de POO em Java</p>
                        </section>
                    </div>

                </div>
            </main>
            <footer className="rodape">
                <a className="rodape-github" href="https://github.com/hudney-fsbrito" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/github.svg" alt='Ícone da rede social git hub'></img>
                    <p>GitHub</p>
                </a>
                {/* <!-- <a href="" target="_blank" rel="noopener noreferrer">
                <img src="./image/instagram.svg"></img>
                <p>Instagram</p> --> 
            </a>*/}
                <a className="rodape-linkedin" href="https://www.linkedin.com/in/hudneyfernandes-dev/" target="_blank"
                    rel="noopener noreferrer">
                    <img src="./assets/linkedin.svg" alt='Ícone da rede social linkedIn'></img>
                    <p>LinkedIn</p>
                </a>
            </footer>
        </div>
    );
}

export default App;
