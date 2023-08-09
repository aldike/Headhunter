const express = require('express');
const router = express.Router();
const {isEmployee, isManager} = require('../auth/middlewares');
const {isVacancyAuthor} = require('../vacancy/middlewares');
const {validateApply, isApplyAuthor} = require('./middlewares');
const {createApply, getEmployeeApplies, deleteApply, acceptEmployee} = require('./controllers')
const passport = require('passport');


router.post('/api/applies', passport.authenticate('jwt', {session: false}), isEmployee, validateApply, createApply)
router.get('/api/applies/employee', passport.authenticate('jwt', {session: false}), isEmployee, getEmployeeApplies)
router.delete('/api/applies/:id', passport.authenticate('jwt', {session: false}), isEmployee, isApplyAuthor, deleteApply)
router.put('/api/applies/accept/employee', passport.authenticate('jwt', {session: false}), isManager, isApplyAuthor, isVacancyAuthor, acceptEmployee)


module.exports = router;