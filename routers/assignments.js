var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var User = require( '../models/user');

router.get('/', function(req, res) {
  console.log('get route hit');
  res.sendStatus(200);
}); // end get

router.post('/', function(req, res) {
  console.log('post route hit', req.body);
  var newAssignment = new User({
    assignment_name: req.body.assignment_name,
    student_name: req.body.student_name,
    score: req.body.score,
    date_completed: new Date(req.body.date_string)
  });


  newAssignment.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('created new assignment');
      res.sendStatus(201);
    } // end else
  }); // end newAssignment
}); // end post

module.exports = router;
