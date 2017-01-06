var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var assignmentSchema = new Schema ({
  assignment_name: String,
  student_name: String,
  score: Number,
  date_completed: Date
}); // end assignmentSchema

var User = mongoose.model('assignments', assignmentSchema);

module.exports = User;
