import React from 'react';


function dataDrivers({data}) {
  
  return (  
    <li className="drivers">
      <h3 className="namedrivers"> {data.name}</h3>
    </li>
  )
}

export default dataDrivers;