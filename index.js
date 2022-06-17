const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));

// setting view engine as ejs
app.set('view engine','ejs');

// setting path for views
app.set('views','./views');

// to use static files, present in assets directory
app.use(express.static('assets'));

// server configurations...
app.listen(port, function(err){
    if (err){
        // console.log('Error: ', err);
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});