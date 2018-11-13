exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
    .del()
    .then(function() {
        // Inserts seed entries
        return knex('users').insert([
        {
            id: 1,
            first_name:'Ana',
            last_name:'Nunez',
            bio:'this is my bio',
        },
        {
            id: 2,
            first_name:'Gurlabe',
            last_name:'Dhaliwal',
            bio:'this is my bio',

        },
        {
            id: 3,
            first_name:'Jadepreet',
            last_name:'Dhaliwal',
            bio:'this is my bio',
        },
        {
            id: 4,
            first_name:'Gurlabiesha',
            last_name:'Dhaliwal',
            bio:'this is my bio',

        },

        ])
    })
    .then(() => knex.raw( `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
))
}