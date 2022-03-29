import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { useEffect, useState } from 'react';
import getDrivers from '../api/api';

function DriversProfile () {
/*const [profileDrivers, setprofileDrivers] = useState([]);

useEffect(() => {
    getDrivers()
      .then((response) => {
        setprofileDrivers(response.results);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    }, []);*/



    return (
            
        <div className='mainDrivers'>
               <Navbar/>
           </div>
    
    )
    }
    
export default DriversProfile;