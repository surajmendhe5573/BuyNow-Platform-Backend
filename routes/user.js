const express= require('express');
const { signUp, login, getAllUsers, updateUser, deleteUser, deleteUserr, me } = require('../controllers/user.controller');
const authenticate= require('../middlewares/auth.middleware');
const router= express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/', getAllUsers);
router.put('/', authenticate, updateUser);
router.delete('/', authenticate, deleteUser);

router.delete('/:id', authenticate, deleteUserr);
router.get('/me', authenticate, me);

module.exports= router;