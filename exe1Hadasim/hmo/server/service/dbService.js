import mysql from 'mysql2/promise';
import 'dotenv/config'

async function query(query, params) {
    let results;
    const connection = await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD
    });

    try {
        [results] = await connection.execute(query, params);

    } catch (err) {
        console.log(err);
    }
    finally {
        connection.end();
    }
    return results;
}

export {
    query
}