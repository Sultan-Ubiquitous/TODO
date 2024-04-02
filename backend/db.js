const mongoose = require('mongoose');
const { boolean, number } = require('zod');
mongoose.connect("mongodb+srv://baapu:vKoNzOi9ObeSh4xu@tododb.yejlqfz.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    importance: Number, 
    completed: Boolean,
});


const tODO = mongoose.model('todos', todoSchema);

module.exports = {
    tODO
};