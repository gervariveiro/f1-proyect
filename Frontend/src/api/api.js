export const getDrivers = () => {
    return fetch('http://localhost:8080/driversdb/getdrivers')
        .then((response) => response.json())
};

export const gettracks = () => {
    return fetch('http://localhost:8080/tracksdb/gettracks')
        .then((response) => response.json())
};
