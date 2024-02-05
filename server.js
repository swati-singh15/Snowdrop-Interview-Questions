const express = require('express');
const dotenv=require('dotenv').config();

const app = express();
const port = process.env.port;
const connection=require('./dbConfid')
const routes=require('./routes');






app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});
 

app.use('/',routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



  