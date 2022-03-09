const BASE_URL = 'https://ergast.com/api/f1/drivers.json';


const getDrivers = () => {
    return fetch(`${BASE_URL}`)
        .then((response) => response.json())
            }

export default getDrivers;