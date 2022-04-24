import React from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import swal from 'sweetalert';



function Contact () {

    const mostrarAlert = () => { 
        swal({
            title: "Tu mensaje fue enviado",
            icon: "success",
            button: "Cerrar"
        })
    }

    return (
            
           <div className='maincontact'>
               <Navbar/>
                <div className='driversespacio'></div>
                <div className='divform'>
                <form className='formcontact' action="http://localhost:8080/send-email" method="POST">
                    <label>
                        Name:
                        <input type="text" name="name" placeholder='Nombre' />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder='Email'/>
                    </label>
                    <label>
                        Mensaje:
                        <input className='mensaje' type="text" name="message" placeholder='Escriba un mensaje' />
                    </label>
                    <button className='botonenviar' type="submit" value="Enviar" onClick={() => mostrarAlert()}>Enviar</button>
                </form>
                </div>
                <Footer/>
           </div>
            
    )
    }
    
export default Contact;