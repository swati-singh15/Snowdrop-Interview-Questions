const express = require('express');
const controller=require('./controller');

const router=express();

router.post('/submit',controller.submitData);


module.exports=router