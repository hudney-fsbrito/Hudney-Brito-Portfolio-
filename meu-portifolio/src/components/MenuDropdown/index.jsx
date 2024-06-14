import { useState } from "react";
import MeuMenuDropdown from "./style";
import { itensMenu as linksMenu} from "./itensMenu";
import menuBurger from "../../assets/menu-button_icon.svg"

function MenuDropdown() {

  const [isActve, setIsActve] = useState(false);
  const onClick = () => { setIsActve(!isActve) };

  const listLinks = linksMenu.map((link, i) =>
    <li key={i}><a href={`#${link.id}`}>{link.title}</a></li>
  )

  return (
    <div >
      <MeuMenuDropdown>
        <button onClick={onClick} className="btnMenu" >
            <img className='imgMenu' src={menuBurger} alt="Menu" />
        </button>
        <nav className={`menu ${isActve ? "active" : "desactive"} `}>
          <ul>
            {listLinks}
          </ul>
        </nav>
      </MeuMenuDropdown>
    </div>
  );
};

export default MenuDropdown;