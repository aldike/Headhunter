const SpecializationType = require('./models/SpecializationType')
const Specialization = require('./models/Specialization')

const getSpecializations = async (req, res)=>{

    const specializationsTypes = await SpecializationType.findAll({
        include: {
            model: Specialization,
            as: "specializations"
        }
    })
    res.status(200).send(specializationsTypes)
}

module.exports = {
    getSpecializations
}