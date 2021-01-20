const { Router } = require('express');
const { verifySignUp } = require('../middlewares');
const authController = require('../controllers/auth.controller');

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

router.post(
  '/signup',
  verifySignUp.checkSignupInputs,
  [
    verifySignUp.checkDuplicateEmail,
    verifySignUp.checkRolesExisting
  ],
  authController.signup
);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/refresh', authController.refresh);

// router.post()

// router.post()

module.exports = router;
