const pg = require("pg");
const faker = require("faker"); // for dummy Data
var md5 = require("md5");
// const Pool = require("pg").Pool;
// //import { Pool } from "pg";

// const pool = new Pool({
//   // user: "postgres",
//   // password: "2744",
//   // host: "localhost",
//   // port: 5432,
//   // database: "jobring",
//   host: "localhost",
//   user: "postgres",
//   password: "2744",
//   database: "virdb",
//   port: 5432,
// });

// module.exports = pool;
const config = {
  // host: "virfserver.postgres.database.azure.com",
  // user: "VIR@virfserver",
  // password: "123456_l",
  // database: "vir_db",
  // port: 5432,
  // ssl: true,
  host: "localhost",
  user: "postgres",
  password: "2744",
  database: "virdb",
  port: 5432,
  // ssl: true,
};

const client = new pg.Client(config);
client.connect((err) => {
  if (err) throw err;
  else {
    console.log("DataBase is connected :)");
    queryDatabase();
  }
});

function queryDatabase() {
  const query = `
  set search_path to "vir";
    `;

  client
    .query(query)
    .then((res) => {
      // console.log("Table created successfully!" );
      //   client.end(console.log("Closed client connection"));
    })
    .catch((err) => console.log(err))
    .then(() => {
      //   console.log("Finished execution, exiting now");
      //   process.exit();
    });
}

// async function insertStudent() {
//   try {
//     const id = Date.now().toString();
//     const email = id + "@gmail.com";
//     // const schemaTest = pool.query("set search_path to 'jobPortal';");
//     const insertS = pool.query(
//       "insert into student (s_name, full_name, paswd, email, city, image, major, gender) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *",
//       [
//         id,
//         faker.name.findName(),
//         md5(faker.internet.password()),
//         email,
//         faker.address.city(),
//         null,
//         majors[Math.floor(Math.random() * majors.length)],
//         gender[Math.floor(Math.random() * gender.length)],
//       ]
//     );
//     console.log("std");
//   } catch (error) {
//     console.log("there is an error in inserting in student: ");
//     console.error(error.message);
//   }
// }

const getBooks = (request, response) => {
  const id = Date.now().toString();
  const email = id + "@gmail.com";
  client.query(
    "insert into student (s_name, full_name, paswd, email, city, image, major, gender) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *",
    [
      id,
      faker.name.findName(),
      md5(faker.internet.password()),
      email,
      faker.address.city(),
      null,
      // majors[Math.floor(Math.random() * majors.length)],
      "Computer",
      // gender[Math.floor(Math.random() * gender.length)],
      "female",
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getName = (request, response) => {
  client.query("select full_name from student limit 1", (error, results) => {
    if (error) {
      throw error;
    }
    // console.log(">>> " + results.rows);
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

module.exports = { getBooks, addBook, getName };
