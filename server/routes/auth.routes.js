const { Router } = require('express');
const { verifySignUp } = require('../middlewares');
const authController = require('../controllers/auth.controller');

const router = Router();

router.post(
  '/signup',
  [
    verifySignUp.checkDuplicateEmail,
    verifySignUp.checkRolesExisting
  ],
  authController.signup
);

router.post(
  '/signin',
  authController.signin
);

router.post()

router.post()

module.exports = router;
