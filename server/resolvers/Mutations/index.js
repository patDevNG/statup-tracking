const { createStartupStages } = require('./createStartupStages.resolver');
const { updateStartupStage } = require('./updateStartupStage.resolver')
module.exports = {
    createStartupStages,
    updateStartupStage
}