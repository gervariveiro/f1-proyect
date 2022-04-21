import React from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';

function Contact () {

    return (
            
           <div className='maincontact'>
               <Navbar/>
                <div className='driversespacio'></div>
                <form className='formcontact'>
                    <label>
                        Name:
                        <input type="text" name="Nombre" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="Email" />
                    </label>
                    <label>
                        Mensaje:
                        <input className='mensaje' type="text" name="Escriba un mensaje" />
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
                <Footer/>
           </div>
            
    )
    }
    
export default Contact;