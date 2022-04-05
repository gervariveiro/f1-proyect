import React from 'react';
import ButtonHome from '../Buttons/Buttonhome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


/*const btnMenu = document.querySelector("#btnMenu");
const menu= document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});*/

function Navbar () {
    

    return (


        <div className='navbar'>
            <span class="nav-bar">
            <ButtonHome/>
            <div className="menuicon" id="btnMenu">
                <FontAwesomeIcon icon={faBars} />
            </div>            
        </span>
        <nav class="main-nav">
            <ul class="menu" id="menu">
                <ButtonHome/>
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
        </nav>
        <script src="menu.js"></script>
        </div>
    
    )
    }
    
export default Navbar;