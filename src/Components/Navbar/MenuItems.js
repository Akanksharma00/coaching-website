import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'
import {Li, NavButton} from './Header';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const MenuItems = ({items, depthLevel}) => {
    let ref = useRef();
    const [dropdown, setDropdown] = useState(false);

    useEffect(()=>{
        const handler = (event) => {
            if (dropdown && ref?.current && !ref?.current?.contains(event?.target)){
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
           };
    },[dropdown]);

    const onMouseEnter = () => {
        // window.innerWidth > 960 && setDropdown(true);
        setDropdown(true);
       };
       
       const onMouseLeave = () => {
        // window.innerWidth > 960 && setDropdown(false);
        setDropdown(false);
       };

  return (
    <Li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {items?.submenu && items?.url ? (
            <>
                <NavButton type='buttton' aria-haspopup='menu' aria-expanded={dropdown ? "true" : "false"} onClick={()=>setDropdown(!dropdown)}>
                    {items?.title}{' '}
                    {depthLevel > 0 ? <span><ArrowRightIcon /></span> : <span><ArrowDropDownIcon style={{position:"relative", paddingLeft:"0.4em"}}/></span>}
                </NavButton>
                <Dropdown submenus={items?.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
            </>
        ): !items?.url && items?.submenu ? (
            <>
                <NavButton>
                    {items?.title}{' '}
                </NavButton>
            </>
        ) : (
            <Link to={items?.url} style={{textDecoration:"none", color:"#000", fontSize:"16px"}}>{items?.title}</Link>
        )}
    </Li>
  )
}

export default MenuItems