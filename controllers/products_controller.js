module.exports = {
    create: (req, res, next) => {
        let db = req.app.get('db')
        db.create_product(req.body).then((response) => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    getOne: (req, res, next) => {
        let db = req.app.get('db')
        let { id } = req.params
        db.read_product(id)
        .then( product => res.status(200).send( product[0] ))
        .catch(err => res.status(500).send(err))
    },
    getAll: (req, res, next) => {
        let db = req.app.get('db')
        db.read_products().then((response) => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    update: (req, res, next) => {
        let db = req.app.get('db')
        let { id } = req.params
        let { query } = req
        
        db.update_product([id, query.desc]).then((response) => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },
    delete: (req, res, next) => {
        let db = req.app.get('db')
        let { id } = req.params
        db.delete_product(id).then((response) => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    }
}