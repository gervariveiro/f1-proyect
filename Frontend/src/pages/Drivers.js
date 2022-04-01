import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer.js';

function DriversProfile () {


const url = 'http://localhost:8080/driversdb/getdrivers'
const [alldrivers, setAlldrives] = useState();
const fetchApi = async () => {
    const response = await fetch(url);
    //console.log(response.status); para chequear la peticion
    const responseJSON = await response.json();
    setAlldrives(responseJSON);
    //console.log(responseJSON) para chequear la peticion
}
  useEffect(() => {
    fetchApi()
  }, []);


    return (
            
        <div className='mainDrivers'>
               <Navbar/>
            <ul className='listadrivers'>
              {!alldrivers ? 'Cargando...' :
               alldrivers.map( (todo,index) => {
                 return<li>
                   <ul className='driverdatos'>
                      <img className="driversimg"src={todo.urlImageDriver} alt="conductores"/>
                      <li>Nombre: {todo.name}</li>
                      <li>Número: {todo.number}</li>
                      <li>País: {todo.country} <img className="flags" src={todo.url_bandera} alt="banderas"/></li>
                      <li>Escudería: {todo.team}</li>
                      <li>Edad: {todo.age}</li>
                      <li>Campeonatos ganados: {todo.worldchamp}</li>
                    </ul>
                 </li>
               })
              }
            </ul>
            <Footer/> 
        </div>
    );
  };


export default DriversProfile;