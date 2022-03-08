const API_KEY = 'fvjdzcgey2wtgcr7q2gx4s92';
const BASE_URL = 'https://api.sportradar.us/formula1/trial/v2/en';


const getDrivers = () => {
    return fetch(`${BASE_URL}/competitors/profile.xml?api_key=${API_KEY}`)
        .then((response) => response.json())
            }

export default getDrivers;