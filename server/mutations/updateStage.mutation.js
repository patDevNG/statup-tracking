const { StartupStatges } = require('../models');

const modifyFields = ['status', 'stage'];
const updateModifiedProperties = (oldObject, modifiedObject, properties) => {
  for (const property of properties) {
    if (modifiedObject[property] !== undefined) {
      oldObject[property] = modifiedObject[property];
    }
  }
};
exports.updateStartupStage = async ({ startupStage }) => {
  try {
    const startupStageToUpdate = await StartupStatges.findById(startupStage.id);
    if (!startupStageToUpdate) throw new Error('Startupstage not found!!');
    updateModifiedProperties(startupStageToUpdate, startupStage, modifyFields);
    const updatedStartupStage = await startupStageToUpdate.save();
    return updatedStartupStage;
  } catch (error) {
    if (error && error.code == '11000') {
      throw new Error(`Startup stage  of ${stage} already exist`);
    } else {
      throw new Error(`${error.message}`);
    }
  }
};
