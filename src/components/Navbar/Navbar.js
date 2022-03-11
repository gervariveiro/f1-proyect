import React from 'react';
import ButtonHome from '../Buttons/Buttonhome';

function Navbar () {

    return (
            
        <div className='navbar'>
            <span class="nav-bar">
            <FontAwesomeIcon icon={["fas fa-bars", id="btnMenu"] } />
            <ButtonHome/>
        </span>
        <nav class="main-nav">
            <ul class="menu" id="menu">
                <ButtonHome/>
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
        <script src="menu.js"></script>
        </div>
    
    )
    }
    
export default Navbar;