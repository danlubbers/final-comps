module.exports = {

    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        // console.log(products)
        dbInstance.getAllProducts().then(products => res.status(200).send
        (products)).catch((err)=>{console.log(err);
        res.status(500).send(err)
        })
    }


}