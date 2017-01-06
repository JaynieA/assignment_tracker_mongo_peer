var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var User = require( '../models/user');

router.get('/:id?', function(req, res) {
  console.log('get route hit');
  //find all assignments in the database
  if (req.params.id) {
    User.find({_id: req.params.id}, function(err, assignments) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log(assignments);
        res.send(assignments);
      } // end else
    }); // end find
  } else {
    User.find({}, function(err, assignments) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log(assignments);
        res.send(assignments);
      } // end else
    }); // end find
  }
}); // end get

router.post('/', function(req, res) {
  console.log('post route hit', req.body);
  //create new assignment
  var newAssignment = new User({
    assignment_name: req.body.assignment_name,
    student_name: req.body.student_name,
    score: req.body.score,
    date_completed: new Date(req.body.date_string)
  });
  //Save the assignment in the database
  newAssignment.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('created new assignment');
      res.sendStatus(201);
    } // end else
  }); // end newAssignment
}); // end post

router.delete('/:id', function(req, res){
  console.log('Index to be deleted: ', req.params.id);
  User.remove({_id: req.params.id}, function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    } // end else
  }); // end find
});

module.exports = router;
