var port = process.env.PORT || 8080;
var express = require( 'express' );
var app = express();
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));

//DB connection
var connStr = 'mongodb://localhost:27017/assignments';
var MongoDB = mongoose.connect(connStr).connection;

MongoDB.on('error', function(err) {
  console.log('mongo connection error', err);
}); // end on

MongoDB.once('open', function() {
  console.log('mongo connection open');
}); // end open

app.listen(port, function() {
  console.log('server listening on', port);
}); // end listen

//Routers
var assignments = require( '../routers/assignments' );
app.use( '/assignments', assignments );
