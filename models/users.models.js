const driversQuery = require('../queries/01_drivers.query')
//=================================FETCH=================================/
const fetchDrivers = () => {
    let drivers = driversQuery.fetchDrivers()

    return drivers.then(result => {
        return result.length < 1
        ? { error: 'error retreiving drivers', status: 404 }
        : result
    })
};
//=================================GET=================================/
const getDriver= (id) => {
    let drivers = driversQuery.getDriver(id)

    return drivers.then(result => {
        return result.length < 1
        ? { error: 'error retreiving ', status: 404 }
        : result
    }) 
};
//=================================CREATE=================================/
const createDriver = (driverInfo) => {
drivers = driversQuery.createDriver(driverInfo)

    return drivers.then(result => {
        return result.length < 1
        ? { error: 'error retreiving', status: 404 }
        : result
    })
};
//==========================DELETE==========================//
const destroyDriver = (id) => {
    const drivers = driversQuery.destroyDriver(id);
    return drivers.then(result => {
        return result.length < 1 ?
        { error: 'error deleting', status: 400 } :
        result
    });
}
//==========================UPDATE==========================//
const updateDriver = (id, driverInfo) => {
    const drivers = driversQuery.updateDriver(id, driverInfo);
    return drivers.then(result => {
        return result.length < 1 ?
        { error: 'error updating driver', status: 400 } :
        result
    })
}



module.exports = {
fetchDrivers,
getDriver,
createDriver,
destroyDriver,
//updateDriver
}  