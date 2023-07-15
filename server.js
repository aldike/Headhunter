const express = require('express');
const logger = require('morgan');
const passport = require("passport");
// const multer = require('multer');
// const upload = multer();
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require('./app/auth/passport')

// app.use(upload.any());

app.use(require('./app/auth/routes'))
app.use(require('./app/region/routes'))
app.use(require('./app/skills/routes'))
app.use(require('./app/employment-type/routes'))
app.use(require('./app/languages/routes'))

app.listen(8080, () =>{
    console.log("Server is listening on port 8080");
})