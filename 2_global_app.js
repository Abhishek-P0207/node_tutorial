const m = require('./3_modules_app')

console.log(m);

m.sayHi(`hello`);

// console.log(__dirname);
// console.log(__filename);
// require and module global variables is needed for modules

// console.log(process);

setInterval(() => {
    console.log(`hello world`)
},1000)

console.log(m.blabla);
