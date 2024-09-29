// Module
// every file is a module
// modules - encapsulated code (only share what we want)
const shek = `shek`;
const secret = `Secrert`
const alternate = `alternate way`;

const sayHi = (name) =>{
    console.log(`hello there ${name}`);
}

sayHi(`abhi`);
sayHi(shek);

// console.log(module);

module.exports = {shek , sayHi}

module.exports.blabla = alternate;    // exporting as blabla