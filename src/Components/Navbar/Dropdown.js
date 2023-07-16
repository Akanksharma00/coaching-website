import React from 'react';
import style from '../../Styles/Navbar.module.css';
import MenuItems from './MenuItems';

const Dropdown = ({submenus, expanded, handleDropdown, depthLevel, device}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? style["dropdown-submenu"] : "";
    const responsiveClass = device === "mobile" ? style["mobile-dropdown-submenu"] : "";
  return (
    <ul className={`${dropdownClass} ${responsiveClass} ${expanded ? style["dropdown-expanded"] : style["dropdown-collapsed"]}`} onMouseOver={()=>handleDropdown(true)} onMouseOut={()=>handleDropdown(false)}>
        {submenus?.map((val,index)=>(
            <MenuItems items={val}key={index} depthLevel={depthLevel} />
        ))}
    </ul>
  )
}

export default Dropdown