import React from 'react';


function DataDrivers({data}) {
  
  return ( 
    <li className="driverslist">
      <img className="driverimg">{data.urlImageDriver}</img>
      <h3 className="namedrivers"> {data.name}</h3>
    </li>
  )
}

export default DataDrivers;