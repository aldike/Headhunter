const Resume = require('./models/Resume')

const createResume = async (req, res) =>{
    const resume = await Resume.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        position: req.body.position,
        cityId: req.body.cityId,
        citizenship: req.body.citizenship,
        about: req.body.about,
        birthday: req.body.birthday,
        gender: req.body.gender,
        salary: req.body.salary,
        salary_type: req.body.salary_type,
        main_language: req.body.main_language,
        skills: req.body.skills,
        userId: req.user.id,
    })
    
    res.status(200).send(resume);
}

module.exports = {
    createResume
}