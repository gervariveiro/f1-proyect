import React from 'react';


function DataDrivers({data}) {
  
  return (  
    <li className="drivers">
      <h3 className="namedrivers"> {data.givenName}</h3>
    </li>
  )
}

export default DataDrivers;