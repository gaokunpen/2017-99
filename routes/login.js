var express = require('express');
var router = express.Router();
var mongodb =require('mongodb');
var mongoCt = mongodb.MongoClient;

router.get('/',function(req,res){
    console.log(req.query.userID,req.query.password)
    mongoCt.connect('mongodb://127.0.0.1:27017/mkl',(err,db)=>{
        var name = db.collection('name');//连表
        name.find({id:req.query.userID}).toArray((err,data)=>{
        if(data.length==0){
            console.log(data);
            res.send('0');
        }else{
            // name.insertOne({id:req.query.userID,psd:req.query.password});
            data.psd !=req.query.password;
            res.send('1');
        }

    })
})
})
module.exports = router;