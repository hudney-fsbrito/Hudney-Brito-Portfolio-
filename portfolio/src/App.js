// import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="container">
      <nav class="menu">
            <ul class="menu-container">
                {/* <!-- <a class="rodape-github" href="" target="_blank" rel="noopener noreferrer"> --> */}
                <img id="menuImg"  src="./assets/icon/menu.svg" alt="ìcone para menu de navegação"></img>
                {/* <!-- </a> --> */}
                <li class="menu-container-item">
                    <a href="#topo index.html">Página inicial</a>
                </li>
                <li class="menu-container-item">
                    <a href="#projetos">Projetos</a>
                </li>
                <li class="menu-container-item">
                    <a href="#conteudo-sobreMim">Sobre mim</a>
                </li>
                <li class="menu-container-item">
                    <a href="contact.html">Contato</a>
                </li>
            </ul>
        </nav>
        <header class="cabecalho" id="topo">
            
            <div class="cabecalho-texto">
                <h1 class="cabecalho-texto-titulo">Olá! Seja bem vindo!</h1>
                <h2 class="cabecalho-texto-subtitulo">Sou Hudney Brito | Desenvolvedor Web</h2>
                <p class="cabecalho-texto-resumo">Aqui verá projetos que uso para praticar e que já participei.</p>
            </div>
        </header>
        <main class="conteudo">
            <h2 id="projetos">Projetos</h2>
            <section class="conteudo-projeto">
                <section class="conteudo-projeto-item">Em construção</section>
                <section class="conteudo-projeto-item">Em construção</section>
                <section class="conteudo-projeto-item">Em construção</section>
                <section class="conteudo-projeto-item">Em construção</section>
                <section class="conteudo-projeto-item">Em construção</section>
            </section>
            <div id="conteudo-sobreMim">
                <img class="cabecalho-imagem" src="./assets/fone-embaçado.png" alt="Um rosto de fone de ouvido"/>
                <div class="container-conteudo-informacao-conteudo-sobre" >
                    <section class="conteudo-informacao conteudo-sobre">
                        <h3 class="conteudo-titulo">Sobre mim</h3>
                        <p class="conteudo-texto">Apreciador das mais diversas artes e um grande admirador da
                            tecnologia. Um
                            “sonhador realista” que vislumbra uma utopia de um futuro harmônico entre a humanidade. Em
                            transição de carreira, volto a estudar na área que um dia almejei me capacitando com cursos
                            práticos oferecidos por diversas plataformas. Intenso e obstinado, tenho um objetivo
                            profissional de ser um desenvolvedor de software, campo de atividade no qual me despertou
                            interesse.</p>
                    </section>
                    <section class="conteudo-informacao conteudo-formacao">
                        <h3 class="conteudo-titulo">Formação</h3>
                        <p class="conteudo-texto">Análise e desenvolvimento de sistemas</p>
                    </section>
                    <section class="conteudo-informacao conteudo-curso">
                        <h3 class="conteudo-titulo">Cursos</h3>
                        <p class="conteudo-texto">Conhecimento em HTML5 e CSS3 / Conhecimentos em JavaScript /
                            Conhecimento
                            de Git e Github / Conhecimentos em Java / Conhecimentos de POO em Java</p>
                    </section>
                </div>

            </div>
        </main>
        <footer class="rodape">
            <a class="rodape-github" href="https://github.com/hudney-fsbrito" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.svg" alt='Ícone da rede social git hub'></img>
                <p>GitHub</p>
            </a>
            {/* <!-- <a href="" target="_blank" rel="noopener noreferrer">
                <img src="./image/instagram.svg"></img>
                <p>Instagram</p> --> 
            </a>*/}
            <a class="rodape-linkedin" href="https://www.linkedin.com/in/hudneyfernandes-dev/" target="_blank"
                rel="noopener noreferrer">
                <img src="./assets/linkedin.svg" alt='Ícone da rede social linkedIn'></img>
                <p>LinkedIn</p>
            </a>
        </footer>
    </div>
  );
}

export default App;
