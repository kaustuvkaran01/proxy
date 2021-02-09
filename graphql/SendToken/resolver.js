//import { Pool as _Pool } from 'pg'
import pkg from 'pg'
const { Pool: _Pool } = pkg

///DB initialize
const Pool = _Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'googlepe1',
    database: 'schoolapp',
    port: 5432,
})

const addUser = async (name, key, token) => {
    const users = await pool.query(
        'INSERT INTO users (id, key) VALUES($1, $2) ON CONFLICT (id) DO NOTHING;',
        [name, key]
    )

    const devices = await pool.query(
        'INSERT INTO devices (id, token) VALUES($1, $2) ON CONFLICT (token) DO NOTHING;',
        [name, token]
    )

    console.log(users.rows, devices.rows)
    return users.rows
}

export default addUser
