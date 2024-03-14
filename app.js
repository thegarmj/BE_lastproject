const express = require("express");
const expressLayouts = require("express-ejs-layouts"); // memanggil module express-ejs-layouts
// const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

// app.use(morgan("dev"));

// build in middleware
app.use(express.static("public"));

// app.use((req, res, next) => {
//   console.log("Time : ", Date.now());
//   next();
// });

app.get("/", (req, res) => {
  //   res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "Johan Krisbima Abi",
      nim: "E41212055",
    },
    {
      nama: "Ilham Gusti",
      nim: "E41212045",
    },
    {
      nama: "Fadlil Liwa",
      nim: "E41212075",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Johan Krisbima Abi",
    mahasiswa: mahasiswa,
    title: "Halaman Utama",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
