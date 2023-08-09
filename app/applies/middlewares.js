const Apply = require('./Apply')
const Resume = require('../resume/models/Resume')

const validateApply = (req, res, next) => {
    let errors = {};

    if(!req.body.resumeId || req.body.resumeId.length === 0)
        errors.resumeId = "Поле Резюме не заполнено"
    if(!req.body.vacancyId || req.body.vacancyId.length === 0)
        errors.vacancyId = "Поле Вакансия не заполнено"

    if(JSON.stringify(errors) !== JSON.stringify({}))
        res.status(400).send(errors)
    else next()
}
const isApplyAuthor = async (req, res, next) =>{
    const id = req.params.id

    const apply = await Apply.findByPk(id)

    if(!apply) res.status(400).send({message: "Apply with that id is not exist"})
    else {
        const resumes = await Resume.findAll({
            where: {
                userId: req.user.id
            }
        })
        const ids = resumes.map(item => item.id)

        if(ids.includes(id*1)){
            next()
        }else{
            res.status(403).send({message: "Access forbidden"})
        }
    }
}
module.exports = {
    validateApply,
    isApplyAuthor
}