const { StartupStatges } = require('../models');

exports.getAllStartupStage = async () => {
  try {
    const startupStage = await StartupStatges.find();
    return startupStage;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
