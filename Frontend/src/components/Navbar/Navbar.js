import React, { useState } from "react";
import {Button} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ButtonHome from '../Buttons/Buttonhome';

function Navbar () {

    /*const btnMenu = document.querySelector("#btnMenu");
    const menu= document.querySelector("#menu");*/
    const [menuVisible, setmenuVisible] = useState(false);

    return (

        <div>
            <span className="nav-bar">
                    <ButtonHome/>
                    <Button
                    onClick={function(){
                        setmenuVisible(!menuVisible);
                    }}>
                        <FontAwesomeIcon icon={faBars} className='menu_icon'/>
                    <ul className={menuVisible ? 'menumostrar' : 'menu'} id="menu">
                        <li className="menu__item">
                            <a href="/teams" className="menu__link">Equipos</a>
                        </li>
                        <li className="menu__item">
                            <a href="/drivers" className="menu__link">Conductores</a>
                        </li>
                        <li className="menu__item">
                            <a href="/tracks" className="menu__link">Circuitos</a>
                        </li>
                        <li className="menu__item">
                            <a href="/contacto" className="menu__link">Contacto</a>
                        </li>
                    </ul>
                </Button>
                </span>
        </div>
    
    )
    }
    
export default Navbar;
