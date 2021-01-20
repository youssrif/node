const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/add', UserController.user_create_get);
router.get('/', UserController.user_index);
router.post('/', UserController.user_create_post);
router.get('/:nom', UserController.user_details);
router.put('/:email',UserController.user_update);
router.delete('/:email', UserController.user_delete);

module.exports = router;