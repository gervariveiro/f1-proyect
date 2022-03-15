import React from 'react';
import f1logo from './f1logo.png';



function ButtonHome () {

    return (
            
        <a className="buttonhome" href="https://www.freecodecamp.org/">
            <img className="homelogo" src={f1logo}/>
        </a>  
    
    )
    }
    
export default ButtonHome;