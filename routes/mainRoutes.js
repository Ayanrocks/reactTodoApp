const path = require("path");

module.exports = app => {
  app.get("*", (req, res) => {
    if (process.env.NODE_ENV == "production") {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    }
  });
};
