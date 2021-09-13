const mongoose = require('mongoose');

module.exports = (db_name) => {
    mongoose.connect(`mongodb://localhost/${db_name}`, { //.connect returns a promise
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then( () => {console.log(`Established a connection to the ${db_name} database`)})
        .catch( (err) => {console.log(`Something went wrong while connecting to the ${db_name} database`, err)});
};