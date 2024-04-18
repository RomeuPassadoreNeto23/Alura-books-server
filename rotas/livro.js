const { Router } = require("express")
const {getLivros, getLivro , postLivro, patchLivro} = require('../controladores/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.delete('/', (req, res) => {
    res.send('você fez uma requisição do tipo DELETE')
})

router.patch('/:id', patchLivro)



module.exports = router