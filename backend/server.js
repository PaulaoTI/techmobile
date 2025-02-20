const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '..' , 'frontend', 'public')));

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Erro ao conectar no MySQL", err);
//     return;
//   }
//   console.log("Conectado ao MySQL");
// });

// app.post("/cadastro", (req, res) => {
//   const { nome, telefone, email } = req.body;

//   if (!nome || !email || !senha) {
//     return res.status(400).json({ error: "Preencha todos os campos" });
//   }

//   const insertUserSQL = "INSERT INTO usuarios (nome, telefone, email) VALUES (?, ?, ?)";
//   db.query(insertUserSQL, [nome, telefone, email], (err, result) => {
//     if (err) {
//       console.error("Erro ao cadastrar usuário:", err);
//       return res.status(500).json({ error: "Erro ao cadastrar usuário" });
//     }
//     res.json({ message: "Usuário cadastrado com sucesso" });
//   });
// });

app.get("/cadastro", (req, res) => {
  
  res.sendFile(path.join(__dirname, '..' , 'frontend', 'cadastro.html'));

});

app.get("/home", (req, res) => {
  
  res.sendFile(path.join(__dirname, '..' , 'frontend', 'index.html'));

});

app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, '..', 'frontend' , `${page}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("Página não encontrada!");
        }
    });
});


app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
