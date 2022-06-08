
// // Setup empty JS object to act as endpoint for all routes


// Require Express to run server and routes
const express = require('express');
let bodyParser = require('body-parser');
const cors = require ('cors');
// Start up an instance of app
let app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port , listening);
function listening(){
    console.log('server is running');
    console.log(`running on http://localhost:${port}`);
}
let projectData = {};


app.get('/weather', (req, res)=> {
    
    console.log('the weather');
    console.log(req.body);
res.send(projectData);
  })
  
app.get('/all', (req, res)=> {
  
    
    res.send(projectData);
  })
app.post('/weather', (req, res)=> {
    projectData= req.body;
    
    console.log('i got request');
    console.log(req.body);
    res.send(projectData);
  })


