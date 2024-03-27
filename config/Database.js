import { Sequelize } from "sequelize";

const db = new Sequelize("warehouse", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
