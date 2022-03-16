import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer.js';
import Alonso from '../assets/alonso.jpg';

function Alonsopage () {

    return (
            
           <div className='containerhome'>
               <Navbar/>
               <section className='mainalonso'>
                    <h1>El hito de Alonso"</h1>
                    <img className='alonsofoto' src={Alonso}/>
                    <h4>Fernando Alonso, 18 temporadas (2001-actualidad)</h4>
               </section>
                <section className='Sainstext'>
                    <p>
                        Esta misma temporada el asturiano pasará a ser junto a Barrichello, Schumacher y Raikkonen, el piloto con más cursos a su espaldas dentro del Mundial. Pese al pequeño paréntesis que hizo en la F1 (entre 2019 y 2021) para competir en otras disciplinas, Alonso decidió volver para intentar conquistar un tercer campeonato que forma parte de El Plan. Los dos anteriores llegaron en 2005 y 2006, junto a Renault, escudería en la que desembarcó tras debutar junto a Minardi en el 2001. Sus éxitos le llevaron hasta Ferrari y McLaren, estructura en la que culminó dos etapas, y actualmente milita en las filas de Alpine con el respaldo de 32 victorias, 98 podios y 22 poles en lo que lleva de trayectoria.
                    </p>
                </section>    
               <Footer/>
           </div>
    
    )
    }
    
export default Alonsopage;