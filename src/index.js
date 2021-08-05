const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./routes/index.route");

// Using static document
app.use(express.static(path.join(__dirname, "public")));

// Using encode request parameters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan("dev")); //combined

// Templates engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route initial
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
