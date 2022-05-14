CREATE DATABASE checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS responses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  session_id TEXT NULL,
  username TEXT NO0T NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT NULL,
  city TEXT NOT NULL,
  us_state TEXT NOT NULL,
  shipping_zip INT NOT NULL,
  card_num INT NOT NULL,
  exp_date DATE NOT NULL,
  cvv INT NOT NULL,
  billing_zip INT NOT NULL
);

INSERT INTO responses(id, session_id, username, email, password, address_line1, address_line2, city, us_state, shipping_zip, card_num, exp_date, cvv, billing_zip)
VALUES ()  -- come from server (from client)

-- // WILL NEED TO CHANGE SESSION_ID TO NOT NULL ONCE SET UP COOKIES