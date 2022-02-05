const router = require('express').Router();

const sneakerController = require('../controllers/sneaker.controller');

router.get('/', sneakerController.getSneakers);

router.get('/:sneaker_id', sneakerController.getSneakerById);

router.post('/', sneakerController.createSneaker);

router.put('/', sneakerController.updateSneaker);

module.exports = router;
