import React
 from "react";
function MenuDropdown(props) {

  const listLinks = props.linksMenu.map((link, index) => 
    <li >{link}</li>
  )

  return (

    <>
      <ul>
        {listLinks}
      </ul>
    </>

  );
};

export default MenuDropdown;