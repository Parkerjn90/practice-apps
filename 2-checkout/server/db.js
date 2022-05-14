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
      CREATE TABLE IF NOT EXISTS responses(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        session_id TEXT NULL,
        username TEXT,
        email TEXT NULL,
        password TEXT NULL,
        address_line1 TEXT NULL,
        address_line2 TEXT NULL,
        city TEXT NOT NULL,
        us_state TEXT NOT NULL,
        shipping_zip INT NOT NULL,
        card_num INT NOT NULL,
        exp_date DATE NOT NULL,
        cvv INT NOT NULL,
        billing_zip INT NOT NULL
      );
    )
  )
  .then(() => console.log('success'))
  .catch((err) => console.log(err))

db.addNewUser(userInfo)
  .then((userInfo) => {
    {session_id, username, email, password, address_line1, address_line2, city, us_state, shipping_zip, card_num, exp_date, cvv, billing_zip} = userInfo;
    db.queryAsync(
      INSERT INTO responses(session_id, username, email, password, address_line1, address_line2, city, us_state, shipping_zip, card_num, exp_date, cvv, billing_zip)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) [session_id, username, email, password, address_line1, address_line2, city, us_state, shipping_zip, card_num, exp_date, cvv, billing_zip];
    )
  })
   .then(() => console.log('user info saved to db'))
   .catch((err) => console.error(err));

module.exports = db;
