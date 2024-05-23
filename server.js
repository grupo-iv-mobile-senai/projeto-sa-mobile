import api from "./back_end.js"

const port = 3000

api.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})