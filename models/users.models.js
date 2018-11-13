const usersQuery = require('../queries/01_users.query')
//=================================FETCH=================================/
const fetchUsers = () => {
    let users = usersQuery.fetchUsers()

    return users.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
};
//=================================GET=================================/
const getUser= (id) => {
    let users = usersQuery.getUser(id)

    return users.then(result => {
        return result.length < 1
        ? { error: 'error retreiving ', status: 404 }
        : result
    }) 
};
//=================================CREATE=================================/
const createUser = (userInfo) => {
users = usersQuery.createUser(userInfo)

    return users.then(result => {
        return result.length < 1
        ? { error: 'error retreiving', status: 404 }
        : result
    })
};
//==========================DELETE==========================//
const destroyUser = (id) => {
    const users = usersQuery.destroyUser(id);
    return users.then(result => {
        return result.length < 1 ?
        { error: 'error deleting', status: 400 } :
        result
    });
}
//==========================UPDATE==========================//
const updateuser = (id, userInfo) => {
    const users = usersQuery.updateuser(id, userInfo);
    return users.then(result => {
        return result.length < 1 ?
        { error: 'error updating user', status: 400 } :
        result
    })
}



module.exports = {
fetchUsers,
getUser,
createUser,
destroyUser,
//updateDriver
}  