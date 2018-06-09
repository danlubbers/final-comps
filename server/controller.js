module.exports = {

    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        // console.log(products)
        dbInstance.getAllProducts().then(products => res.status(200).send
        (products)).catch((err)=>{console.log(err);
        res.status(500).send(err)
        })
    },

    getOneProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params
        console.log(id);
        dbInstance.getOneProduct(id).then(product => res.status(200).send(product)).catch((err)=>{
        res.status(500).send(err)
        })
    },

    editProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log(req.query)
        // The id is referencing whatever i write after the colon in the api call, in this case, it's id
        const {id} = req.params;
        const {title, price} = req.query;

        dbInstance.editProduct([id, title, price]).then(product => res.status(200).send(product)).catch((err)=>{
            res.status(500).send(err);
        })
    }


}