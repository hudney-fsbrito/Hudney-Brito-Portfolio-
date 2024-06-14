import styled from "styled-components";

export const SkillStyle = styled.section`

.skills{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skills-techs{
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: 1.5rem;
}

.tech{
  margin: auto;
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tech img{
  width:50%;
  padding: 1rem;
}
@media (max-width: 350px) {
  .tech{
    width: 3rem;
    height: 3rem;
}

}
@media (min-width: 760px) {
  
  .skills-techs{
    width: 60%;

  }
  p{
    width: 50%;
  }
  .tech{
    width: 6rem;
    height: 6rem;
  }


}


`