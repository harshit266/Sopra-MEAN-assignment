const express = require('express')
const aboutController =require('./about.controller')

const router =express.Router();




router.post('/add',function(req,res){
    aboutController.add(req,res)
})


module.exports= router;