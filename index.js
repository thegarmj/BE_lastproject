import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

// app.use(express.static("public"));

try {
  await db.authenticate();
  // await Users.sync();
  console.log("Database Connected");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(router);
// app.get("/", (req, res) => {
//   //   res.send("Hello World!");
//   res.sendFile("./views/login.html", { root: __dirname });
// });

// app.get("/register", (req, res) => {
//   res.sendFile("./views/register.html", { root: __dirname });
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
