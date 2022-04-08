import React from 'react';
import {AppBar, Button, ThemeProvider, Toolbar, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ButtonHome from '../Buttons/Buttonhome';



function Navbar () {

    return (


        <div>
            <AppBar style={{ backgroundColor: '#FC2D1C' }}>
                <Toolbar>
                    <ButtonHome/>
                    <Button id='btnmenu'>
                        <FontAwesomeIcon icon={faBars} className='menu_icon' id="btnMenu"/>
                    </Button>
                    <ul class="menu" id="menu">
                        <li class="menu__item">
                            <a href="" class="menu__link">Equipos</a>
                        </li>
                        <li class="menu__item">
                            <a href="/drivers" class="menu__link">Conductores</a>
                        </li>
                        <li class="menu__item">
                            <a href="/tracks" class="menu__link">Circuitos</a>
                        </li>
                        <li class="menu__item">
                            <a href="/contacto" class="menu__link">Contacto</a>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    
    )
    }
    
export default Navbar;