const mongoose = require('mongoose');
mongoose.connect("mongoURL")
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: String},
    name: {type: String},
    designation: {type: String},
    gender: {type: String},
    password: {type: String},
    role: {type: String},
    batch: {type: String},
    image: {type: String},
    regimage: {type: String},
    course: {type: String},
    phone: {type: String},
    coursesd: {type: String},
    coursesend: {type: String},
    fullname:{type: String},
    approvedstatus:{type: String},
    approvedby:{type: String}
 }, {timestamps:true})

var User = mongoose.model('User', userSchema)

module.exports = User;
