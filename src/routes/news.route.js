const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/create', newsController.create);
router.post('/store', newsController.store);
router.get('/:slug', newsController.show);
router.get('/:id/edit', newsController.edit);
router.put('/:id', newsController.update);
router.delete('/:id', newsController.remove);
router.get('/', newsController.index);

module.exports = router;
