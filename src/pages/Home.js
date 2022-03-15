import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Portada from '../assets/portadafoto.jpg';
import f12022 from '../assets/f12022.jpg';
import Alonso from '../assets/alonso.jpg';
import F12022_video from '../components/f12022_video';


function Home () {

    return (
            
           <div className='containerhome'>
               <Navbar/>
               <section className='mainhome'>
                    <a href='/carlossains'>
                    <h1>Carlos Sains el "Outsider"</h1>
                    <img className='portadafoto' src={Portada}/>
                    <p>Sains en Bahréin</p>
                    </a>
                    <h5>"No somos favoritos", dice Binotto, pero el F1-75 
                        apunta hacia arriba ante el GP de Bahréin. 
                        El madrileño, en su mejor momento como piloto.</h5>
               </section>
               <ul className='videoslista'>
                   <li>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/QLUA_kYbWuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </li>
                </ul>
               <ul className='noticias'>
                   <li>
                       <a href='/formula2022'>
                            <img className='f12022foto' src={f12022}/>
                            <h5>La revolución del siglo en la F1</h5>
                        </a>
                   </li>
                   <li>
                       <a href='/alonso'>
                            <img className='alonsofoto' src={Alonso}/>
                            <h5>El hito que igualará Alonso esta temporada</h5>
                        </a>
                   </li>
               </ul>
           </div>
    
    )
    }
    
export default Home;