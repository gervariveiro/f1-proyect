import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer.js';
import f12022 from '../assets/f12022.jpg';

function RevoF1 () {

    return (
            
           <div className='containerhome'>
               <Navbar/>
               <section className='mainalonso'>
                    <h1>La Revolución en F1 2022"</h1>
                    <img className='alonsofoto' src={f12022}/>
                    <h4>La nueva normativa técnica supone un antes y después y el campeonato promete alcanzar cotas de espectacularidad aún mayores.</h4>
               </section>
                <section className='Sainstext'>
                    <p>
                        La Fórmula 1 cambia para seguir siendo espectacular. En 2022 entra en marcha el nuevo reglamento técnico que simplifica la aerodinámica de los coches y recupera el efecto suelo. El objetivo es facilitar las luchas en la pista y eliminar el ‘aire sucio’ que desprenden los monoplazas a su paso, y que hasta ahora impedía a un piloto seguir a otro de cerca sin ceder un alto porcentaje de su carga aerodinámica. FIA y F1 prepararon estas normas originalmente para la temporada 2021, pero la pandemia retrasó los planes. Desde hace unos meses, en las fábricas de los equipos del Mundial están volcados con los coches que ya han llegado al asfalto.
                    </p>
                </section>    
               <Footer/>
           </div>
    
    )
    }
    
export default RevoF1;