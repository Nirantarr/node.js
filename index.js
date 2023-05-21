const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8')); // json is read
const index = fs.readFileSync('index.html','utf-8'); // index.html is read

const express = require('express');
const server = express();

// STATIC Middleware
server.use(express.static('public')); // with this files under the public folder will get hosted.

server.get('/demo',(req,res)=>{
// res.send("Hello world");
// res.sendFile('\Coding Stuff\node learn\index.html');
res.sendStatus(202);
})

// USING MIDDLEWARE 
// middleware are those which are in between user and server. If user sents req before getting response it must go underthrough middleware.
// APPLICATION MIDDLEWARE
// server.use((req,res,next)=>{
//  console.log(req.method,req.ip,req.hostname);
//  next();
// })

// ROUTE-LEVEL-MIDDLEWARE
const auth = (req,res,next)=>{
    console.log(req.query);
    if(req.query.password==123){
        next();
    }else{
        res.sendStatus(401);
    }
}
// server.use(auth);

// USING DIFFERENT TYPES OF HTTPS MEHTODS
server.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.json({type:'GET'});
})
server.post('/',auth,(req,res)=>{
    res.json({type:'POST'});
})
server.put('/',(req,res)=>{
    res.json({type:'PUT'});
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'});
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'});
})

server.listen(8080,()=>{
    console.log("server started at 8080");
})