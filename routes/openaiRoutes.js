const express = require('express') 
// const { generateImage } = require('../controllers/openaiController'); 
const { generateImage } = require('../controllers/openaiController') 
const routerr = express.Router(); 
 
routerr.post('/generateimage', generateImage); 
 
module.exports = routerr; 
