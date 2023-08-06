const validateVacancy = (req, res, next) =>{
    let errors = {};

    if(!req.body.name || req.body.name.length === 0)
        errors.name = "Поле Название вакансии не заполнено"
    if(!req.body.specializationId || typeof(req.body.specializationId) === 'number')
        errors.specializationId = "Поле Специализация не заполнено"
    if(!req.body.cityId || typeof(req.body.cityId) === 'number')
        errors.cityId = "Поле Где искать сотрудника не заполнено"
    if(!req.body.description || req.body.description.length === 0)
        errors.description = "Поле Расскажите про вакансию не заполнено"
    if(!req.body.employmentTypeId || typeof(req.body.employmentTypeId) === 'number')
        errors.employmentTypeId = "Поле Тип занятости не заполнено"

    if(JSON.stringify(errors) !== JSON.stringify({}))
        res.status(400).send(errors)
    else next()
}

module.exports = {
    validateVacancy
}