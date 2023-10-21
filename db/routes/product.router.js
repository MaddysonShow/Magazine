const Router = require('express')
const router = new Router()
const prodController = require('../controller/prod.controller')


router.post('/product', prodController.createProduct)
router.get('/catalog', prodController.getCatalog)
router.get('/catalog/:value', prodController.getProductByCatalogKey)
router.get('/search/:value', prodController.getProductBySearchKey)
router.get('/product', prodController.getProduct)
router.get('/product/:id', prodController.getOneProduct)

router.put('/product', prodController.updateProduct)
router.delete('/product/:id', prodController.deleteProduct)

module.exports = router