import React from "react";
import { menuItems } from "../../Constants/menuItems";
import MenuItems from "./MenuItems";
import { Nav, Ul } from "./Header";

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        {menuItems?.map((val, index) => {
          const depthLevel = 0;
          return <MenuItems items={val} key={index} depthLevel={depthLevel}/>;
        })}
      </Ul>
    </Nav>
  );
};

export default Navbar;
