const {readFile , writeFile} = require('fs')

readFile('./content/first.txt' ,'utf-8', (err , result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    
    readFile('./content/second.txt' ,'utf-8', (err , result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;
        
        writeFile('./content/fourth.txt',
        `Here is the result : ${first} , ${second}`,
        (err , result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        }
        
    )
})
})

// here the program will off load the heavy tasks or will continue asynchronisly that is it will not wait for each line or function to complete