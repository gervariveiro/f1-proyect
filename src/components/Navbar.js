import React from 'react';
import ButtonHome from './Buttons/Buttonhome';

function Navbar () {

    return (
            
        <div className='navbar'>
            <span class="nav-bar">
            <i class="fas fa-bars" id="btnMenu"></i>
            <a href="home.html"> Hola soy home2<img class="logohome2" src=""/></a>
        </span>
        <nav class="main-nav">
            <ButtonHome/>
            <ul class="menu" id="menu">
                <li class="menu__item">
                    <a href="" class="menu__link">Equipos</a>
                </li>
                <li class="menu__item">
                    <a href="/productos" class="menu__link">Conductores</a>
                </li>
                <li class="menu__item">
                    <a href="/turismo" class="menu__link">Circuitos</a>
                </li>
                <li class="menu__item">
                    <a href="/contacto" class="menu__link">Contacto</a>
                </li>
            </ul>
        </nav>
        </div>
    
    )
    }
    
export default Navbar;