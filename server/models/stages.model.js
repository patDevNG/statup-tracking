const mongoose = require('mongoose');
const mongooseSerial = require('mongoose-serial');

const {Schema, model} = mongoose

const startupStagesSchema = new Schema({
    referenceId: {type: String},
    stage: {
        type: String,
        index: {
            unique: true,
            collation: { locale: 'en', strength: 2 },
          }, 
        required: true},
    status: { 
        type: String,
        enum:[
            'completed',
            'pending'
        ],
        required: true
    }
}, { timestamps: true });

startupStagesSchema.plugin(mongooseSerial, {
    field: 'referenceId', prefix: 'OL', initCount: 'monthly', separator: '-', digits: 8,
  });
module.exports.StartupStatges = model('StartupStatges', startupStagesSchema);  