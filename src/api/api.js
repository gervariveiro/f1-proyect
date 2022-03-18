/*const BASE_URL = 'http://ergast.com/api/f1/drivers?=123';*/


const getAllDrivers = () => {
    return fetch('http://ergast.com/api/f1/drivers?=123')
        .then((response) => response.json())
        .then((data) => console.log(data));
            }

export default getAllDrivers;