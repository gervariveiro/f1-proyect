import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { useEffect, useState } from 'react';

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
            <ul>
              {!alldrivers ? 'Cargando...' :
               alldrivers.map( (todo,index) => {
                 return <li>
                   {todo.name}
                   {todo.number}
                   <img className="flags" src={todo.url_bandera}/>
                   <img className="drivers"src={todo.urlImageDriver}/>
                   {todo.team}
                   {todo.country}
                   {todo.age}
                   {todo.worldchamp}
                 </li>
               })
              }
            </ul>  
        </div>
    );
  };


export default DriversProfile;