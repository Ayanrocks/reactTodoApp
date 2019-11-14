const app = require("express")();
const bodyParser = require("body-parser");
const morgan = require("morgan");


app.use(morgan("dev"))

require("./routes/routes")(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Running on " + PORT);
});
