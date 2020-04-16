const express = require('express');
const router = express.Router();
const tag = require('../controllers/tag-controller');

router.post('/', tag.createTags);

router.get('/', tag.getTags);

router.delete('/', tag.deleteTags);

router.get('/keys', tag.getKeys);

module.exports = router;