import React from 'react';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import getDrivers from '../api/api';
import ListDrivers from '../components/listDrivers';

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
            
        <div className='mainhome'>
               <Navbar/>
               <ListDrivers
          data={profileDrivers}
          name="Conductores"
         />
           </div>
    
    )
    }
    
export default DriversProfile;