const Sneaker = require('../dataBase/Sneaker');

module.exports = {
    getSneakers: async  (req, res) => {
        try {
            const sneakers = await Sneaker.find();

            res.json(sneakers);

        }catch (e) {
            res.json(e)

        }



    },

    getSneakerById: async (req, res) => {
        const {sneaker_id} = req.params;
        const sneaker = await Sneaker.findById(sneaker_id);

        res.json({sneaker})
    },

    createSneaker: async (req, res) => {
        try {
            const newSneaker = await Sneaker.create(req.body);

            res.json(newSneaker);
        } catch (e) {
            res.json(e);
        }


    },

    updateSneaker: (req, res) => {
        res.json('UPDATE SNEAKER');
    }
}