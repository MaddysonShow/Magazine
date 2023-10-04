const Router = require('express')
const router = new Router()
const prodController = require('../controller/prod.controller')


router.post('/product', prodController.createProduct)

router.get('/product', prodController.getProduct)
router.get('/product/:id', prodController.getOneProduct)

router.put('/product', prodController.updateProduct)

router.delete('/product/:id', prodController.deleteProduct)

module.exports = router