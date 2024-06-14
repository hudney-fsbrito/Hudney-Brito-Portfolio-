import Header from "../../components/Header";
import { MyHome } from "./style"
import Skills from "../../components/SkillSection";

function Home() {



  return (
    <MyHome>
      <Header></Header>
      <main className="containerSection">
        <section className="home">
          <h1>Desenvolvedor Frontend </h1>
          <p>Desenvolvendo interfaces criativas e aplicando soluções em design, criando experiências emocionantes para o usuário e interfaces agradáveis e intuitivas.
          </p>
        </section>
        <section className="about">
          <div className="about-name">
            <h1>Olá, sou Hudney</h1>
            <h2>Desenvolvedor web</h2>
          </div>
          <div className="about-description">
            <p>Profissional determinado, versátil e motivado.  </p>
            <p>Tendo profunda admiração pelas artes e pela tecnologia. Fã de animes e séries, games, livros e, é claro, programação.</p>
            <p>Interessado em tudo que engloba o mundo do frontend.</p>
          </div>
        </section>
        <Skills></Skills>
        <section className="project">
          projeto
        </section>
        <section className="contact">
          contato
        </section>
      </main>
      <footer className="footer">by hudney.brito</footer>
    </MyHome>
  )
}

export default Home;