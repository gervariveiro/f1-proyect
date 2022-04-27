import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer.js';

function Drivers () {


const url = 'https://f1backend.herokuapp.com//getdrivers'

//local = http://localhost:8080/driversdb/getdrivers
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
               <div className='driversespacio'></div>
            <ul className='listadrivers'>
              {!alldrivers ? 'Cargando...' :
               alldrivers.map( (todo) => {
                 return<li>
                   <ul className='driverdatos'>
                      <img className="driversimg"src={todo.urlImageDriver} alt="conductores"/>
                      <li className='namedata'>{todo.name}</li>
                      <li className='pilotodata'>Nº{todo.number}</li>
                      <li className='pilotodata'>{todo.country} <img className="flags" src={todo.url_bandera} alt="banderas"/></li>
                      <li className='pilotodata'>{todo.team}</li>
                      <li className='pilotodata'>{todo.age}</li>
                      <li className='pilotodata'>{todo.worldchamp}</li>
                    </ul>
                 </li>
               })
              }
            </ul>
            <Footer/> 
        </div>
    );
  };


export default Drivers;