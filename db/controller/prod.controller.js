const db = require('../../dbase')

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
        const getProduct = await db.query(`SELECT * FROM products`)
        res.json(getProduct.rows)
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
}

module.exports = new ProdController()
