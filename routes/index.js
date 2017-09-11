var express = require('express');//引入express
var router = express.Router();//引入路由
var mongodb = require('mongodb');//引入mongodb的中间件
var mongoCt = mongodb.MongoClient;//mongo用的东西

router.get('/', function(req, res) {//连接app.js里的主js
  mongoCt.connect('mongodb://127.0.0.1:27017/mkl',(err,db)=>{//连接库
      if(err){
          console.log('没有连上')
      }else{
          var ggx = db.collection('ggx');//连表
            ggx.find({}).toArray((err,result)=>{//从集合里取数据
                if(err) throw new Error();//err表示取数据失败
                res.send(result);//result表示取数据成功
        })
      }
  })
});
module.exports = router;//返回路由
