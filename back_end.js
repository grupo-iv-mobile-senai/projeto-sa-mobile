import express from 'express';
import conexao from './comum/constantes/conexao_sql.js';

const api = express()
api.use(express.json())

api.get('/clientes', (req, res) => {
    const sql = "SELECT * FROM cliente"
    conexao.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.status(200).json(result)
        }
    })
})

api.get('/clientes/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM cliente WHERE id_cliente = ?"
    conexao.query(sql, id, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.status(200).json(result)
        }
    })
})

api.post('clientes', (req, res)=> {
    const sql = "INSERT INTO cliente (nome, cpf, email, telefone) VALUES (?, ?, ?, ?)"
    conexao.query(sql, [req.body.nome, req.body.cpf, req.body.email, req.body.telefone])
})


export default api