// destructuring the module , by choosing specific functions
const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt' , 'utf8');
const second = readFileSync('./content/second.txt' , 'utf8');
// console.log(first);

writeFileSync(
    './content/third.txt' ,
    `Here is the result : ${first} , ${second}`,
    {flag : 'a'}
)

// the progrsm will run sequentially so if there is a heavy load task then the program can't continue