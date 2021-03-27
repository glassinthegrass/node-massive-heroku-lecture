module.exports = {

    getItems : (req,res) =>{

        // this gets our database 
        const db = req.app.get('db');
        
        db.get_all_items()
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err));
    },

    addItem: (req,res) =>{
        const db = req.app.get('db')
        const {itemName,itemSize,itemPrice} = req.body;

        
        db.add_item(itemName, itemSize, itemPrice)
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err))        
    }
}