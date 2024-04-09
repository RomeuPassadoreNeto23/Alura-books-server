const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("Olá Mundo")
})

router.post('/', (req, res) => {
    res.send('você fez uma requisição do tipo POST')
})

router.delete('/', (req, res) => {
    res.send('você fez uma requisição do tipo DELETE')
})

router.patch('/', (req, res) => {
    res.send('você fez uma requisição do tipo PATCH')
})



module.exports = router