var express= require('express');
var app = express();
var todoControllers = require ('./controllers/todoControllers');

//set up tempate engine
app.set('view engine', 'ejs');

//static files
app.use('/assets', express.static('assets'));

//fire Controllers
todoControllers(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');
