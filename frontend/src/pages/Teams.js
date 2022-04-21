import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer.js';

function Teams () {


const url = 'http://localhost:8080/teamsdb/geteams'
const [allteams, setAllTeams] = useState();
const fetchApi = async () => {
    const response = await fetch(url);
    //console.log(response.status); para chequear la peticion
    const responseJSON = await response.json();
    setAllTeams(responseJSON);
    //console.log(responseJSON) para chequear la peticion
}
  useEffect(() => {
    fetchApi()
  }, []);


    return (
            
        <div className='mainDrivers'>
               <Navbar/>
               <div className='driversespacio'></div>
            <ul className='listateams'>
              {!allteams ? 'Cargando...' :
               allteams.map( (todo) => {
                 return<li>
                   <ul className='teamsdatos'>
                      <img className="teamsimg"src={todo.urlImageTeam} alt="Equipos"/>
                      <img className="carsimg"src={todo.urlImageCar} alt="Coches"/>
                      <li>Nombre: {todo.name}</li>
                      <li>Pilotos: {todo.drivers}</li>

                      <li>Campeonatos de constructores ganados: {todo.constructorWorldchamps}</li>
                    </ul>
                 </li>
               })
              }
            </ul>
            <Footer/> 
        </div>
    );
  };


export default Teams;