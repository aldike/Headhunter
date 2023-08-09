const express = require('express');
const router = express.Router();
const {isEmployee} = require('../auth/middlewares');
const {createApply, getEmployeeApplies, deleteApply} = require('./controllers')
const passport = require('passport');
const {validateApply, isApplyAuthor} = require('./middlewares');

router.post('/api/applies', passport.authenticate('jwt', {session: false}), isEmployee, validateApply, createApply)
router.get('/api/applies/employee', passport.authenticate('jwt', {session: false}), isEmployee, getEmployeeApplies)
router.delete('/api/applies/:id', passport.authenticate('jwt', {session: false}), isEmployee, isApplyAuthor, deleteApply)


module.exports = router;