const model = require('../models/01_users.models');

//==========================FETCH==========================//
const fetchUsers = (request, response) => { 
    let promise = model.fetchUsers()

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
    };
//==========================GET==========================//
const getUser = (request, response, next) => {
    let {id} = request.params;

    let promise = model.getUser(id)

    promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
    next(error)
    })
};
//==========================CREATE==========================//
const createUser = (request, response, next) => {
    let promise = model.createUser(request.body)

    promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
    next(error)
})
};
// ==========================DELETE==========================//
const destroyUser = (request, response, next) => {
const promise = model.destroyUser(request.params.id);
promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
promise.catch(error =>{ 
    next(error)
})
}
//==========================UPDATE==========================//
const updateUser = (request, response, next) => {
const promise = model.updateUser(request.params.id, request.body);
promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
promise.catch(error =>{ 
    next(error)
})
}

module.exports= {
    fetchUsers,
    getUser, 
    createUser,
    destroyUser,
    updateUser
};