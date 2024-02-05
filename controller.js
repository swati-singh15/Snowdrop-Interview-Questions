
const admin=require('./firbaseConfig');
const connection=require('./dbConfid')

module.exports.submitData= (req, res) => {
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


};

