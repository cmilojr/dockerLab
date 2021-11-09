const express = require("express"),
http= require("http");
var bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.json())
app.set("port",process.env.PORT||3000);
app.use(bodyParser.urlencoded({extended: true,}));
app.get("/",function(req,res){

res.json({info: 'Esta es la primera aplicacion a contenerizar expuesta por el puerto: '+app.get('port')});

});

http.createServer(app).listen(app.get('port'),'0.0.0.0',function(){
console.log('Running Express Server Listening on port :'+app.get('port'));
});
