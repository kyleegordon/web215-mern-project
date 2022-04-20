const express = require('express');
const router = express.Router();
const { registerUser, getMe, loginUser } = require('../controllers/userController');

// router.route('/').get(getGoals).post(setGoal);
// router.route('/:id').put(updateGoal).delete(deleteGoal);


router.get('/me', getMe);
router.post('/', registerUser);
router.post('/login', loginUser);


module.exports = router;