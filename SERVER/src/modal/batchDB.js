const mongoose = require('mongoose');
mongoose.connect("mongoURL")

const Schema = mongoose.Schema;

var userSchema = new Schema({
    batch: {type: Array},
    course: {type: Array},
 }, {timestamps:true})

var Batch = mongoose.model('Batch', userSchema)

module.exports = Batch;
