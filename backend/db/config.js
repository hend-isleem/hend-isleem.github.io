const pg = require("pg");

const config = {
  host: "virserver.postgres.database.azure.com",
  user: "VIR@virserver",
  password: "123456_l",
  database: "vir_db",
  port: 5432,
  ssl: true,
};

const client = new pg.Client(config);
client.connect((err) => {
  if (err) throw err;
  else {
    queryDatabase();
  }
});

function queryDatabase() {
  const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
        DROP TABLE IF EXISTS books;
        CREATE TABLE books (
            ID SERIAL PRIMARY KEY,
            author VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL
          );
        INSERT INTO books (author, title)
        VALUES  ('J.K. Rowling', 'Harry Potter');
    `;

  client
    .query(query)
    .then(() => {
      console.log("Table created successfully!");
      //   client.end(console.log("Closed client connection"));
    })
    .catch((err) => console.log(err))
    .then(() => {
      //   console.log("Finished execution, exiting now");
      //   process.exit();
    });
}

const getBooks = (request, response) => {
  client.query("SELECT * FROM books", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addBook = (request, response) => {
  const { author, title } = request.body;

  client.query(
    "INSERT INTO books (author, title) VALUES ($1, $2)",
    [author, title],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ status: "success", message: "Book added." });
    }
  );
};

module.exports = {getBooks, addBook };
