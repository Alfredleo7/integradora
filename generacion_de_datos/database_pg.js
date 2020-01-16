const { Client } = require("pg");

const coneccionData = {
  user: "exjkbatc",
  host: "raja.db.elephantsql.com",
  database: "exjkbatc",
  password: "veDmLgEoEka-hSHtR2bjtKzmmtbhpSXB",
  port: 5432
};

const pg_con = new Client(coneccionData);

pg_con
  .connect()
  .then(() => {
    console.log("Conectado a la base de datos Postgres");
  })
  .catch(err => {
    console.error("Error al conectar a la base de datos Postgres" + err);
  });

module.exports = pg_con;