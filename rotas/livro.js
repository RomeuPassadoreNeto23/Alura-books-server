const { Router } = require("express")
const {getLivros , postLivro, patchLivro, deleteLivro} = require('../controladores/livro')
const { getLivroPorId } = require("../servicos/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivroPorId)

router.post('/', postLivro)

router.delete('/:id', deleteLivro)

router.patch('/:id', patchLivro)



module.exports = router