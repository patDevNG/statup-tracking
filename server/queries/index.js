const { getAllStartupStage } = require('./getAllStartupstages.query');
const { getStartupStageById } = require('./getStartupStagById.query');

module.exports = {
  getAllStartupStage,
  getStartupStageById,
};
