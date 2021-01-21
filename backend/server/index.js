const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pg = require("pg");
const path = require("path");
const app = express();
const router = express.Router();
const { getBooks, addBook, getName } = require("../db/config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(`${__dirname}/../../client`)));
app.use(express.static(path.join(`${__dirname}/../../client/Login_up`)));

/*
With app.set('views', …) you're setting the Express's app setting which is

A directory or an array of directories for the application's views. If an array,
the views are looked up in the order they occur in the array.

It's used by .render() function to look up views, which are usually dynamic like Jade.

With app.use(express.static(…)) you're defining a middleware whose only purpose is
to serve static files like JS/CSS.

So essentially they're both fundamentally different things.
*/

/*A template engine enables you to use static template files in your application.
 At runtime, the template engine replaces variables in a template file with actual values,
and transforms the template into an HTML file sent to the client. 
This approach makes it easier to design an HTML page.*/

app.set("views", __dirname + "/../../client/html");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app
  .route("/books")
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook);

//   app.get('/companyProfile', (req, res) => {
//     res.render( 'Lyna_company_html/companyProfile');
//  });
app
  .route("/companyProfile", (req, res) => {
    res.render("Lyna_company_html/companyProfile");
  })
  .get(getBooks);

app.get("/companyProfile_forPublic", (req, res) => {
  res.render("Lyna_company_html/companyProfile_forPublic");
});

app.get("/applicantsList", (req, res) => {
  res.render("Lyna_company_html/applicantsList");
});

app.get("/companyLists", (req, res) => {
  res.render("Lyna_company_html/companyLists");
});

app.get("/companyUpdateInfo", (req, res) => {
  res.render("Lyna_company_html/companyUpdateInfo");
});

app.get("/jobPost", (req, res) => {
  res.render("Lyna_company_html/jobPost");
});

app.get("/font-icons", (req, res) => {
  res.render("Hend/font-icons");
});

app.get("/tst", (req, res) => {
  res.render("Ghydaa/tst");
});

app.get("/userCard", (req, res) => {
  res.render("Ghydaa/userCard");
});

app.get("/job-listing", (req, res) => {
  res.render("Hadeel/job-listing");
});

app
  .route("/job-details", (req, res) => {
    res.render("Hadeel/job-details");
  })
  .get((req, res) => {
    // var data = getName();
    var data = { studentList: ["Johnson", "Mary", "Peter", "Chin-su"] };
    // var data = "Hadeel";
    // console.log("response is: " + data);
    res.render("Hadeel/job-details", { students: data });
  });

app.get("/job-listing", (req, res) => {
  res.render("Hadeel/job-listing");
});

app.get("/signUp", (req, res) => {
  res.render("../Login_up/signup");
});

app.get("/signIn", (req, res) => {
  res.render("../Login_up/log");
});

/*
app.use()
app.route('/add', (req, res) => res.render('/companyProfile.html'));
*/

let port = process.env.PORT || 3000;
// Start server
app.listen(port, () => {
  console.log(`Server listening ${port}`);
});
