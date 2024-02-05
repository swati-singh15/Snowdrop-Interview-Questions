const express = require('express');
const dotenv=require('dotenv').config();

const app = express();
const port = 5000;
const connection=require('./dbConfid')

const admin=require('./firbaseConfig');





app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { name, address, phone, email } = req.body;
    const userInfo = { name, address, phone, email };

    connection.query('INSERT INTO userinfo SET ?', userInfo, (err, result) => {
        if (err) throw err;
        console.log('Data inserted into MySQL');

        //insert data to firebase
        const db = admin.database();
        const firebaseRef = db.ref('users');
        firebaseRef.push(userInfo);


        res.redirect('/');
    });


});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



  