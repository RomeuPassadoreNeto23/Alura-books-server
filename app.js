const express = require("express")
const rotaLivor = require('./rotas/livor')

const app = express()

app.use('/livros', rotaLivor)

const port = 8000



app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})