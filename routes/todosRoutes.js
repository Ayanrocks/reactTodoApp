const client = require("../database/connection");

module.exports = app => {
  // Get ALl Todos
  app.get("/todos/", (req, res) => {
    client.query("SELECT * FROM todos", (err, data) => {
      if (err) {
        res.JSON({ error: "Error Showing" });
      } else {
        res.send(data.rows);
      }
    });
  });
  

  // Create a new todo
  app.post("/todos/create", (req, res) => {
    const todo = [req.body.name, req.body.status, req.body.bucket];
    client.query("INSERT INTO todos (name, status, bucket) VALUES ($1,$2,$3)", todo, (err, data) => {
      if (err) {
        res.JSON({ error: "Error Creating" });
      } else {
        res.sendStatus(200);
      }
    });
  });

  // Edit a todo
  app.post("/todos/:id/edit", (req, res) => {
    const todo = [req.body.name, req.body.status, req.params.id];
    console.log(todo);
    client.query("UPDATE todos SET name = $1, status = $2 WHERE id = $3;", todo, (err, data) => {
      if (err) {
        res.JSON({ error: "Error Inserting" });
      } else {
        res.sendStatus(200);
      }
    });
  });

  // delete a todo
  app.delete("/todos/:id/delete", (req, res) => {
    client.query("DELETE FROM todos WHERE id = $1", [req.params.id], (err, data) => {
      if (err) {
        res.JSON({ error: "Error Deleting" });
      } else {
        res.sendStatus(200);
      }
    });
  });
};
