import LogoImg from "../LogoImg";
import MenuDropdown from "../MenuDropdown";
import { ContainerHeader } from "./style";

function Header() {
  return (

    <ContainerHeader className="container-header">
      <LogoImg></LogoImg>
      <MenuDropdown className="menu" ></MenuDropdown>
    </ContainerHeader>



  )
};

export default Header;