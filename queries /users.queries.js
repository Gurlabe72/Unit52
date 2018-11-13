const knex = require('./db')
//=================================FETCH=================================/
const fetchUsers = () => {
    return knex('users')
};
//=================================GET=================================/
const getUriver = (id) => {
    return knex('users')
        .select('users.first_name','users.last_name','users.bio')
        .where('id',id);
}
//=================================CREATE=================================/
const createUriver = (uriverInfo) => {
    return knex('users')
        .insert ({
            first_name: uriverInfo.firstName,
            last_name: uriverInfo.lastName,
            bio: uriverInfo.bio 
        })
    .then(result => {
        return {message: `Welcome ${uriverInfo.firstName}!`}
        })
    .catch(err => {
        return err.message;
})
}
//=================================DELETE=================================/
const destroyUriver = (id) => {
    return knex('users')
    .where("id", id)
    .del()
    .returning('*')

    .then(result => {
        console.log(result)
    return {message: `deleting uriver ${result[0].firstName}`}
    })
    .catch(err => {
        return err.message;
    })
}


module.exports = {
fetchUsers,
getUser,
createUser,
destroyUser,

}