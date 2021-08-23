const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/create', newsController.create);
router.post('/store', newsController.store);
router.get('/:slug', newsController.show);
router.get('/:id/edit', newsController.edit);
router.put('/:id', newsController.update);
router.patch('/:id/restore', newsController.restore);
router.delete('/:id', newsController.remove);
router.delete('/:id/force', newsController.forceRemove);
router.get('/', newsController.index);

module.exports = router;
