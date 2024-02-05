const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fir-project-9c7f3-default-rtdb.firebaseio.com'
});

module.exports=admin;