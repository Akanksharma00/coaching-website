import React from "react";
import MenuItems from "./MenuItems";
import { styled } from "styled-components";

export const Ul = styled.ul`
  position: absolute;
  list-style: none;
  left: -20px;
  padding: 1em;
  z-index: 9999;
`;

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <Ul style={dropdown ? (depthLevel > 1 ? {"display":"block", position: "absolute", left:"100%", top:"-10px", backgroundColor:"#FFF9EB", width:"max-content"} : {"display":"block"} ): {"display":"none"}}>
      {submenus?.map((val, index) => (
        <MenuItems items={val} key={index} depthLevel={depthLevel} />
      ))}
    </Ul>
  );
};

export default Dropdown;
