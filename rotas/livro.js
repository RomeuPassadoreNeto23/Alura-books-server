const { Router } = require("express")
const {getLivros, getLivro , postLivro, patchLivro, deleteLivro} = require('../controladores/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.delete('/:id', deleteLivro)

router.patch('/:id', patchLivro)



module.exports = router