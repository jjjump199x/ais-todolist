var mongoose = require('mongoose')
var url = "mongodb://localhost/todolist"

function Connection() {
    mongoose.connect(url, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    } )
    .then(function (){
        console.log("Successfully connected!");
    })
    .catch(function (error) {
        console.log("Not connected!", error);
    })
    
}
module.exports = Connection

