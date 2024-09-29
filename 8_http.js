const http = require('http')

const server = http.createServer((req , res) => {
    if(req.url === '/'){
        res.write('welcome to our home page');
        res.end();
    }
    if(req.url === '/about'){
        res.write('welcome to our about page');
        res.end();
    }
    else{
        res.write("Nothing here!");
        res.end();
    }
})

server.listen(5000);