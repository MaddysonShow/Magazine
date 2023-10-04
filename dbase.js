const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: '5432',
    database: 'for_node_databse'
})

module.exports = pool