//DB INDEX.JS

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/foodee_user_reviews';

const connection = new pg.Client(connectionString);

connection.connect();

module.exports = connection;

// const query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { client.end(); });
