const { StartupStatges } = require('../models');

exports.createStartupStages = async ({ stage, status }) => {
  try {
    let newDoc;
    const statupStage = new StartupStatges({
      status,
      stage,
    });
    newDoc = await statupStage.save();
    return newDoc;
  } catch (error) {
    if (error && error.code == '11000') {
      throw new Error(`Startup stage  of ${stage} already exist`);
    } else {
      throw new Error(`${error.message}`);
    }
  }
};
