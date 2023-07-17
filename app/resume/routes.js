const express = require('express');
const router = express.Router();
const {createResume} = require('./controllers')
const {isEmployee} = require('../auth/middlewares');
const passport = require('passport');

router.post('/api/resume', passport.authenticate('jwt', {session: false}), isEmployee, createResume)

module.exports = router;