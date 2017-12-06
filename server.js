//https://www.youtube.com/watch?v=pieNMQU3oDw&index=58&list=PLJLX8sGHyHxrQpzaS6Q47lY2WusS_jc9p
var express = require("express");
var bodyParser = require("body-parser");

var mo = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.set('port', (process.env.PORT || 3000));

// Starts the server to begin listening
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
