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
      CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        session_id, // will need to make not null
        username VARCHAR(100),
        email,
        password,
        address_line1,
        address_line2,
        city,
        state VARCHAR(2),
        address_zip VARCHAR(5),
        card_num NUMBER,
        exp_date DATE,
        cvv VARCHAR(3),
        billing_zip VARCHAR(5),
      )
    )
  )
  .then(() => console.log('success'));
  .catch((err) => console.log(err));

module.exports = db;
