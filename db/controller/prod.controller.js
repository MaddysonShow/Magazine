const db = require('../../dbase')
    const maxCount = 3
class ProdController {

    async createProduct(req, res) {
        const {title, price, description, category, image, rate, count, password} = req.body
        console.log(title, price, description, category, image, rate, count, password)
        if (password === ' ') {
            const newProduct = await db.query(`INSERT INTO products (title, price, description, category, image, rate, count) values ($1, $2, $3,$4,$5,$6,$7) RETURNING *`, [title, price, description,category,image,rate,count])
            res.json(newProduct.rows[0])
        }
        else {
            res.json({error: 'Password is incorrect'})
        }
    }

    async getProduct(req, res) {
        let {page} = req.headers
        const totalCount = await db.query(`SELECT count(*) FROM products`)
        // console.log(page);
        if (!page) {
            const getProduct = await db.query(`SELECT * FROM products`)
            // можно использовать rowCount!!!
            res.setHeader('X-Total-Count', totalCount.rows[0].count);
            res.json(getProduct.rows)
        }
        else {
            page *= maxCount
            const getProduct = await db.query(`SELECT * FROM products ORDER BY id LIMIT ${maxCount} OFFSET ${page}`)
            res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count, anything')
            res.setHeader('anything', 4242)
            res.setHeader('X-Total-Count', totalCount.rows[0].count);
            res.json(getProduct.rows)
        }
    }

    async getOneProduct(req, res) {
        const id = req.params.id
        const selectProduct = await db.query(`SELECT * FROM products where id = $1`, [id])
        res.json(selectProduct.rows[0])
    }

    async updateProduct(req, res) {

    }

    async deleteProduct(req, res) {

    }

    async getCatalog(req, res) {
        const allCategories = await db.query(`SELECT DISTINCT category FROM Products;`)
        res.send(allCategories.rows)
    }
    async getProductByCatalogKey(req, res) {
        const catalog = req.params.value
        let {page} = req.headers
        // console.log(page, catalog)
        page *= maxCount
        const productByCategory =
            await db.query(`SELECT * FROM products where category = $1 ORDER BY id LIMIT ${maxCount} OFFSET ${page}`, [catalog])
        const totalCount = await db.query(`SELECT count(category) FROM products WHERE category = $1`, [catalog])
        // ищем элементы из category по точному имени
        res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count, anything')
        res.setHeader('anything', 4242)
        res.setHeader('X-Total-Count', totalCount.rows[0].count);
        res.send(productByCategory.rows)
    }

    async getProductBySearchKey(req, res) {
        const search = req.params.value
        let {page} = req.headers
        // console.log(page, search)
        page *= maxCount
        const productBySearch = await db.query(`SELECT * FROM products where LOWER(title) LIKE LOWER('%${search}%') ORDER BY id LIMIT ${maxCount} OFFSET ${page}`)
        const totalCount = await db.query(`SELECT count(title) FROM products WHERE LOWER(title) LIKE LOWER('%${search}%')`)
        // ищем из ТИТЛЕ итемы без дубликатов?)))) выборка по примерной части запроса url
        res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count, anything')
        res.setHeader('anything', 4242)
        res.setHeader('X-Total-Count', totalCount.rows[0].count);
        res.send(productBySearch.rows)
    }
}

module.exports = new ProdController()
