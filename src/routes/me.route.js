const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/stored/blog', meController.storedBlog);
router.get('/trash/blog', meController.trashBlog);


module.exports = router;
