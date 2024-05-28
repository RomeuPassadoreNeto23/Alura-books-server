const { Router } = require("express")
const {getLivros , postLivro, patchLivro, deleteLivro, getLivroPorid } = require('../controladores/livro')


const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivroPorid)

router.post('/', postLivro)

router.delete('/:id', deleteLivro)

router.patch('/:id', patchLivro)



module.exports = router