var express = require('express');
var socket = require('socket.io');
var app= express();
var server = app.listen(8000,function(){
                        console.log("the server is listening");
                        }); 

app.use(express.static('public'));

var io = socket(server);
io.on('connection',function(socket){
socket.on("chat",function(data){
   io.sockets.emit("chat",data); 
});
    socket.on("typing",function(data){
        socket.broadcast.emit("typing", data);  
    });
             
});