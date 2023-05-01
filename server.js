const http = require('http');
const fs = require('fs');


const server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile('./public/home.html',function(error,data){
           res.writeHead(200,{'Content-Type':'text/html'});
             res.write(data);
             res.end();
        })
     }else if(req.url=="/contact"){
      fs.readFile('./public/contact.html',function(error,data){
         res.writeHead(200,{'Content-Type':'text/html'});
           res.write(data);
           res.end();
      })
     }else if(req.url=="/service"){
      fs.readFile('./public/service.html',function(error,data){
         res.writeHead(200,{'Content-Type':'text/html'});
           res.write(data);
           res.end();
      })
     }else{
      res.writeHead(404,{'Content-Type':'text/html'});
      res.write("<h1>404</h1>"+"<h1>file not found</h1>");
      res.end();
     }
   
})

server.listen(3000);
console.log("server run successfully");