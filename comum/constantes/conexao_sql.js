import mysql from "mysql2"

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "153407",
    database: "estacionamento_sa"
})

export default conexao