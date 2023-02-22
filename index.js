const path = require('path'); 
const express = require('express'); 
const dotenv = require('dotenv').config(); 
const port = process.env.PORT || 5000; 

const app = express(); 
 
// Enable body parser 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
 
// Set static folder 
app.use(express.static(path.join(__dirname, 'public'))); 
 
app.use('/openai', require('./routes/openaiRoutes')); 
 
app.listen(port, () => console.log(`Server started on port ${port}`)); 
//

//OPENAI_API_KEY='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'

