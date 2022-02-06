const { StartupStatges } = require('../models');

exports.getStartupStageById = async({id}) => {
    try {
        return await StartupStatges.findById(id);
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}