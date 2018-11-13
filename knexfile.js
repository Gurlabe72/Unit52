module.exports = {
    development: {
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'Unit52'
    },
    migrations: {
        directory: './db/migrations'
    },
    seeds: {
        directory: './db/seeds'
    }
}}