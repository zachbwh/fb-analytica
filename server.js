var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./api/models/fbAnalyticaModel'), //created model loading here
  bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('fb-analytica REST API server started on: ' + port);
