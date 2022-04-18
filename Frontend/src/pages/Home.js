import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer.js';
import Portada from '../assets/portadafoto.jpg';
import f12022 from '../assets/f12022.jpg';
import Alonso from '../assets/alonso.jpg';




function Home () {



    return (
            
           <div className='containerhome'>
               <Navbar/>
               <section className='mainhome'>
                    <a href='/Sains'>
                    <img className='portadafoto' src={Portada}/>
                    <h1 className='tituloSains'>Carlos Sains el "Outsider"</h1>
                    <p>Sains en Bahréin</p>
                    </a>
                    <h4>"No somos favoritos", dice Binotto, pero el F1-75 
                        apunta hacia arriba ante el GP de Bahréin. 
                        El madrileño, en su mejor momento como piloto.</h4>
               </section>
               <ul className='videoslista'>
                   <li>
                       <h4>Grilla de Conductores</h4>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/QLUA_kYbWuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </li>
                   <li>
                       <h4>El cambio de concepto de Mercedes...</h4>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/MdAIMLV0jVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </li>
                </ul>
               <ul className='noticias'>
                   <li>
                       <a href='/RevoF1'>
                            <h4>La revolución del siglo en la F1</h4>
                            <img className='f12022foto' src={f12022}/>
                        </a>
                   </li>
                   <li>
                       <a href='/Alonsopage'>
                            <h4>El hito que igualará Alonso esta temporada</h4>
                            <img className='alonsofoto' src={Alonso}/>
                        </a>
                   </li>
               </ul>
               <Footer/>
           </div>
    
    )
    }
    
export default Home;