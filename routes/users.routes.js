const express = require('express'); 
const router = express.Router();
const ctrl = require('../controllers/users.controllers');
//================FETCH================//
router.get('/', ctrl.fetchUsers);
//================GET================//
router.get('/:id',  ctrl.getUser);
 //================POST================//
 router.post('/', ctrl.createUser);
//================DELETE================//
router.delete('/:id', ctrl.destroyUser);
//================UPDATE ================//
router.put('/:id',ctrl.updateUser) 

module.exports = router;