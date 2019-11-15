const { Client } = require("pg");
const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});
try {
  client.connect();
} catch (e) {
  console.log("ERROR Connecting DB",e);
}

module.exports = client;
