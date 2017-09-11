var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;
// console.log(mongoCt)
/* GET home page. */
router.get('/', function(req, res) {
    mongoCt.connect('mongodb://127.0.0.1:27017/mkl',(err,db)=>{//连接库
        if(err){
            console.log('连接失败');
        }else{
            var gx = db.collection('gx');//连表
            console.log(1)
            gx.find({}).toArray((err,result)=>{
            if(err) throw new Error();//失败时候出现的
            res.send(result);//
           })
       }
   })
});
module.exports = router;
