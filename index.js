const http = require('http');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json','utf-8')); // json is read
const index = fs.readFileSync('index.html','utf-8'); // index.html is read
const product = data.carts; // json data is fetched
const server = http.createServer((req,res)=>{

    if((req.url).startsWith('/product')){ //used javascirpt to get /product url
        const id = req.url.split('/')[2]; // we get the /product/1 
        // console.log(id);
        const prd = product.find(p=>p.id===(+id)); // we find the received id in data json file.
        // console.log(prd);
        res.setHeader("Content-Type","text/html");
        let modifiedIndex = index.replace('**50**',prd.userId).replace("**10**",prd.totalQuantity).replace('**20**',prd.total) // we replaced the content with values
        res.end(modifiedIndex);
        return;
    }

    switch(req.url){ //these are cases for server side rendering
        case '/':
            res.setHeader("Content-Type","text/html");
            let modifiedIndex = index.replace('**50**',product.userId).replace("**10**",product.totalQuantity).replace('**20**',product.total)
            res.end(modifiedIndex);
            break;
    
        case '/json':
            res.setHeader("Content-Type","application/json");
            res.end(JSON.stringify(data));
            break;
    
        default :
            res.writeHead(404);
            res.end();
    }
//  console.log("server started");
//  res.setHeader("Content-Type","application/json")
//  res.end(JSON.stringify(data));
})
server.listen(8080);