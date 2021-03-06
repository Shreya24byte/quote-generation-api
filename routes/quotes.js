const express = require('express');
const router = express.Router();
const quotesSchema = require('../models/quotesModel');

router.post('/add', function (req, res){
    console.log(req.body);
    const quotesData = new quotesSchema(req.body);
    //save to db
    quotesData.save(function(err){
        if(err){
            console.log("error occurred", err);
        } else {
            console.log("data saved successfully");
            res.send({result:"Success"});
        }
    })
});

router.get("/getAll",function(req,res){
    quotesSchema.find({},{_id: 0, _v: 0 }, function(err,data){
        if(err){
            console.log("error occurred", err);
        } else {
            res.send({result: data});
        }
    })
})

module.exports = router;