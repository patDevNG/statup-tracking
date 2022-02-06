const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const db = process.env.MONGO_URL;

exports.DBConnection = async () => {
  const options = {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  try {
    await mongoose.connect(db, options);
    mongoose.set('useFindAndModify', false);
    console.log('Successfully connected to database!');
  } catch (ex) {
    console.log(ex);
  }
};
