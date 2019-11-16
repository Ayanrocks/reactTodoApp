const client = require("../database/connection");

module.exports = app => {
  // Get ALl Todos
  app.get("/buckets/", (req, res) => {
    client.query("SELECT * FROM buckets", (err, data) => {
      if (err) {
        res.json({ error: "Error Showing" });
      } else {
        res.send(data.rows);
      }
    });
  });

  app.get("/buckets/:id", (req, res) => {
    client.query("SELECT * FROM buckets WHERE id=$1", [req.params.id], (err, data) => {
      if (err) {
        res.json({ error: "Error Showing" });
      } else {
        res.send(data.rows);
      }
    });
  });

  // Create a new todo
  app.post("/buckets/create", (req, res) => {
    const bucket = [req.body.name];
    client.query("INSERT INTO buckets (name) VALUES ($1)", bucket, (err, data) => {
      if (err) {
        res.json({ error: "Error Creating" });
      } else {
        res.sendStatus(200);
      }
    });
  });

  // Edit a todo
  app.post("/buckets/:id/edit", (req, res) => {
    const todo = [req.body.name, req.params.id];
    console.log(todo);
    client.query("UPDATE buckets SET name = $1 WHERE id = $2;", todo, (err, data) => {
      if (err) {
        res.json({ error: "Error Inserting" });
      } else {
        res.sendStatus(200);
      }
    });
  });

  // delete a todo
  app.delete("/buckets/:id/delete", (req, res) => {
    client.query("DELETE FROM buckets WHERE id = $1", [req.params.id], (err, data) => {
      if (err) {
        res.json({ error: "Error Deleting" });
      } else {
        res.sendStatus(200);
      }
    });
  });
};
