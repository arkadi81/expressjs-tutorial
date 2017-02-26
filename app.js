// hello world app from ember website tutorial
'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'ejs'); // has to be installed using npm prior
// app.set('views', __dirname + '/partials');
// set is used to changes settings. __varname is the global designation, off of app.js 

// locals will be available to all templates
app.locals.pagetitle = "awesome website yo";

app.get('/', function (req, res) { // request, response callback
  //res.send('<H1>Hello World!</H1>')
  res.render('default', {
    title: 'Home page',
    classname: 'home',
    users: ['user1','user2','user3'],
  }); // render assumes everything is in the views folder unless changed by app.set
  //render can accept an object conttaining the template data.
});

app.get('/about', function (req, res) { // request, response callback
  res.render('default', {
    title: 'About Us',
    classname: 'about',
    //users: ['beep','boop','baap'],
  });
});

// app.get('/who/:name?/:title?', function (req, res) { // request, response callback
//   var name = req.params.name; // express creates the params array automatically
//   var title = req.params.title;
//   res.send(name + ' was here!' + ' title is ' + title);
// });

app.get('*', function (req, res) { // default 404 route for erros
  res.send('bad route')
});

// send is good for small stuff but templates are better for bigger chunks of html
// the templates included with express are jade / ejs (embeddable js)

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})