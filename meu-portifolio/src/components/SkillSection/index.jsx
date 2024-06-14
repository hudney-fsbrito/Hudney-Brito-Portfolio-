import { techs } from "../../constants/techs"
import { SkillStyle } from "./style"
import { motion } from "framer-motion"
// import imagemDoida from "../../assets/imgTechs/bootstrap.svg"

function Skills() {

  const skillsTechsContainerVariants = {
    hidden: { y: 150, opacity: 1, scale: 0 },
    // hidden: { opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      opacity: 1,
      scale: 1,

    }
  }

  const SkillsTechVariants = {

    visible: {
      transition: {
        delayChildren: .4,
        staggerChildren: .1
      }
    }
  }

  // const imgTechs = 

  return (
    <SkillStyle >
      <div className="skills">
        <h1>Skills</h1>
        <p>O frontend é a principal área de especialização</p>
        <p>Transformar ideias em códigos</p>
        <p>Conhecimento em HTML, CSS, JAVASCRIPT. Construção de sites responsivos e interfaces dinâmicos com React, animações e layout atraentes.</p>

        {/* e mais recentemente REACT. Etapas futuras envolvem expandir a sapiência tecnológica de back-end como Node.js e bancos de dados. */}

        <div className="container-skills-techs">
          <motion.div
            className="skills-techs"
            initial="hidden"
            animate="visible"
            variants={SkillsTechVariants}>
            {techs.map(tech => (
              <motion.div
                className="tech"
                variants={skillsTechsContainerVariants}>
                <img
                  key={tech.id}
                  src={tech.image}
                  alt={tech} />
                <span>{tech.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SkillStyle>
  )
}

export default Skills