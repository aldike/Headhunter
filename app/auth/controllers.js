const sendEmail = require('../utils/sendMail')
const AuthCode = require('./AuthCode')
const User = require('./User')
const Role = require('./Role')
const sendVerificationEmail = (req, res) =>{

    const code = "HH"+Date.now()

    AuthCode.create({
        email: req.body.email,
        code: code,
        valid_till: Date.now() + 120000
    })
    sendEmail(req.body.email, "Код авторизации hh.kz", code)

    res.status(200).end();
}

const verifyCode = async(req, res) => {
    const authCode = await AuthCode.findOne({where: {email: req.body.email}})
    if(!authCode){
        res.status(401).send({error: "Invalid code"});
    }else if(new Date(authCode.valid_till).getTime() < Date.now()){
        res.status(401).send({error: "Code expired"});
    }else if(authCode.code !== req.body.code){
        res.status(401).send({error: "Invalid code"});
    }else{
        const role = await Role.findOne({where: {name: 'employee'}})
        const user = await User.create({
            roleId: role.isSoftDeleted,
            email: req.body.email
        })
        res.status(200).send(user);
    }
    
}

module.exports = {
    sendVerificationEmail,
    verifyCode

}