import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer.js';
import Portada from '../assets/portadafoto.jpg';

function Sains () {

    return (
            
           <div className='containerhome'>
               <Navbar/>
               <section className='mainhome'>
                    <a href='/Sains'>
                    <img className='portadafoto' src={Portada}/>
                    <h1>Carlos Sains el "Outsider"</h1>
                    <p>Sains en Bahréin</p>
                    </a>
                    <h4>"No somos favoritos", dice Binotto, pero el F1-75 
                        apunta hacia arriba ante el GP de Bahréin. 
                        El madrileño, en su mejor momento como piloto.</h4>
               </section>
                <section className='Sainstext'>
                    <p>
                    Pocos comprenderían en el ciclismo que una estrella en ciernes deba competir sobre una bicicleta de aluminio mientras los laureados campeones vuelan sobre fibra de carbono. La Fórmula 1 es uno de esos deportes especiales en el que todos compiten en igualdad de circunstancias, bajo el mismo reglamento técnico y deportivo, pero no en igualdad de condiciones. Carlos Sainz, camino de los 150 grandes premios en el Mundial y con ocho temporadas a sus espaldas, apenas pilotó esbozos de un coche ganador en Mónaco 2021, donde Ferrari dio la campanada, y allí fue segundo. En 2022 al menos se presentan a la primera carrera de la temporada con la sensación de que el invierno ha sido provechoso para Maranello.

Se puede pensar en grande. "No somos los favoritos, esos son los que estaban delante el año pasado, porque son fuertes y han demostrado que son capaces de ganar. Somos los ‘outsiders’, hemos tenido unos buenos test limpios con kilometraje y fiabilidad en los que recogimos muchos datos", subraya Mattia Binotto, al frente de la escudería italiana. Red Bull y Mercedes estarán delante, se presupone, pero Ferrari debe "pelear con ellos" y aspirar a victorias de nuevo este año. No ganan desde Singapur 2019, con Vettel, y es ya su segunda sequía más larga en la historia del campeonato.


Con 27 años, Sainz afronta esta oportunidad en su mejor momento deportivo. Fue quinto del pasado Mundial, el primero con un coche terrenal, y subió cuatro veces al podio. Además sumó más puntos que Leclerc, la referencia teórica en Ferrari. Tras pasar por Toro Rosso, que era Red Bull, más Renault y McLaren, su experiencia le convierte en uno de los pilotos más completos de la parrilla si se conjugan a la vez las habilidades en la pista con la aportación técnica en el garaje.

Ferrari sabe que tienen entre manos una alineación de pilotos de presente y, sobre todo, futuro. Leclerc, de 23 años, firmó en 2019 hasta 2024. Las conversaciones este invierno con Sainz para que alargue su contrato también hasta ese año van por el buen camino y pronto habrá noticias. Mercedes cuenta con Russell para cuando Hamilton se marche, McLaren extendió a Norris hasta 2025, Alpine ató a Ocon para 2024 y Red Bull se entregó a Verstappen hasta 2028. Pero la alineación de Ferrari no se compone de un nombre de futuro, sino de dos, y eso les hace más fuertes. Solo faltaba el coche, y puede ser este F1-75.
                    </p>
                    <h4>Igualdad</h4>
                    <p>
                        Binotto ya prometió que no habría primer y segundo piloto, eso lo decidirá el cronómetro cada sábado: “No lo hicimos el año pasado, no lo haremos este año. Las mismas oportunidades para ambos, y espero que los dos puedan luchar”. En cuanto a Leclerc, el monegasco también terminó satisfecho los entrenamientos sin mojarse sobre las posibilidades del monoplaza: “Rápido, no sé. Fiable sí que es, y eso es algo bueno porque hemos dado muchas vueltas y hemos hecho todas las pruebas que queríamos hacer sin problemas, que es lo importante. ¿Ritmo? No tengo ni idea hasta ahora”.
                    </p>
                </section>    
               <Footer/>
           </div>
    
    )
    }
    
export default Sains;