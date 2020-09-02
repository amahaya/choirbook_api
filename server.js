const { config } = require("dotenv"); // dotenv object destructuration
config(); // dotenv.config()
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false })); // parse req.body from JSON to JS
app.use(morgan("dev")); // logger middleware
app.use(helmet()); // secure http header

app.get("/", (req, res) => {
  res.send("coucou");
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
