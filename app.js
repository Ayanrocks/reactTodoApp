const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("./database/connection");

app.use(morgan("dev"));
app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/mainRoutes")(app);
require("./routes/todosRoutes")(app);
require("./routes/bucketRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Running on " + PORT);
});
