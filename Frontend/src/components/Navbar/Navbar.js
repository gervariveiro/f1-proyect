import React, { useState } from "react";
import {AppBar, Button, Toolbar} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ButtonHome from '../Buttons/Buttonhome';

function Navbar () {

    /*const btnMenu = document.querySelector("#btnMenu");
    const menu= document.querySelector("#menu");*/
    const [menuVisible, setmenuVisible] = useState(false);

    return (

        <div>
            <AppBar style={{ backgroundColor: '#FC2D1C' }}>
                <Toolbar>
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
                </Toolbar>
            </AppBar>
        </div>
    
    )
    }
    
export default Navbar;
