const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pg = require("pg");
const path = require("path");
const app = express();
const router = express.Router();
const { getBooks, addBook, getName, adduser } = require("../db/config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(`${__dirname}/../../client`)));
app.use(express.static(path.join(`${__dirname}/../../client/Login_up`)));

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
app.get("/companyProfile", (req, res) => {
  res.render("Lyna_company_html/companyProfile");
});
// .get(getBooks);

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
  res.render("Ghydaa/card");
});
app.get("/user", (req, res) => {
  res.render("Ghydaa/user");
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
    var data = { studentList: "Johnson" };
    // var data = "Hadeel";
    // console.log("response is: " + data);

    res.render("Hadeel/job-details", data);
    // res.send(data);
  });

app.get("/job-listing", (req, res) => {
  res.render("Hadeel/job-listing");
});

app.get("/signUp", (req, res) => {
  res.render("../Login_up/signup");
});
app.post("/signUp", (req, res) => {
  // console.log("req >>> " + req.body.author);
  // res.render("../Login_up/signup");
});

app.get("/signIn", (req, res) => {
  res.render("../Login_up/log");
});
app.post("/signIn", (req, res) => {
  adduser(req.body.email, req.body.passw);
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
