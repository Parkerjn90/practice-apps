const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT ,
        session_id TEXT,
        username TEXT,
        email TEXT,
        password TEXT,
        address_line1 TEXT,
        address_line2 TEXT,
        city TEXT,
        state TEXT,
        address_zip INT,
        card_num NUMBER,
        exp_date DATE,
        cvv INT,
        billing_zip INT,
        PRIMARY KEY ('id'))`
    )
  )
  .then(() => console.log('success'))
  .catch((err) => console.log(err))

module.exports = db;
