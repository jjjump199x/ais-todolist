const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = Schema({
    "task":{type:String, required:true},
    "date":{type:String, required: true}
})

const todo = mongoose.model("todo",todoSchema,"Todo")

module.exports = todo;