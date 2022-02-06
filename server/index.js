const app = require('./app');
const { DBConnection } = require('./utils/database/mongodb')
const PORT = process.env.PORT || 8080

DBConnection()
if(app.listen(PORT)){
    console.log(`Server running on port ${PORT}`);
}else{
    console.log('An error occured');
}
