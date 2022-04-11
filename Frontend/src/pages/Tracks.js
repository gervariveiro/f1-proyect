import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer.js';
import { useEffect, useState } from 'react';

function Tracks () {


const url = 'http://localhost:8080/tracksdb/gettracks'
const [alltracks, setAllTracks] = useState();
const fetchApi = async () => {
    const response = await fetch(url);
    //console.log(response.status); para chequear la peticion
    const responseJSON = await response.json();
    setAllTracks(responseJSON);
    //console.log(responseJSON) para chequear la peticion
}
  useEffect(() => {
    fetchApi()
  }, []);


    return (
            
        <div className='mainDrivers'>
               <Navbar/>
               <h3 className='h3tracks'>Los circuitos están ordenados según el calendario 2022</h3>
            <ul className='listatracks'>
              {!alltracks ? 'Cargando...' :
               alltracks.map( (todo,index) => {
                 return<li>
                   <ul className='driverdatos'>
                      <img className="tracksimg"src={todo.urlImageTrack} alt="circuitos"/>
                      <li>Nombre: {todo.name}</li>
                      <li>Ciudad: {todo.city} <img className="flags" src={todo.url_bandera} alt="banderas"/></li>
                      <li>Longitud: {todo.length}</li>
                      <li>Curvas: {todo.turns}</li>
                    </ul>
                 </li>
               })
              }
            </ul>
            <Footer/> 
        </div>
    );
  };


export default Tracks;