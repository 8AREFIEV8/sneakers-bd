const db = require('../dataBase/sneakers');

module.exports = {
    getSneakers:  (req, res) => {
        res.json(db);
    },

    getSneakerById: (req, res) => {
        const {sneaker_id} = req.params;
        const sneaker = db[sneaker_id];

        res.json({sneaker})
    },

    createSneaker: (req, res) => {
        console.log(req.body);

        db.push({...req.body, id: db.length + 1})

        res.json(db);
    },

    updateSneaker: (req, res) => {
        res.json('UPDATE SNEAKER');
    }
}