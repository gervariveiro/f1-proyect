import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { useEffect, useState } from 'react';
import getDrivers from '../api/api';
import ListDrivers from '../components/ListDrivers';

function DriversProfile () {
const [profileDrivers, setprofileDrivers] = useState([]);

useEffect(() => {
    getDrivers()
      .then((response) => {
        setprofileDrivers(response.results);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    }, []);



    return (
            
        <div className='mainDrivers'>
               <Navbar/>
               <ListDrivers
          data={profileDrivers}
          name="Conductores"
         />
           </div>
    
    )
    }
    
export default DriversProfile;