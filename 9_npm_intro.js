// dependencies or modules or packages all are same

// npm --version

// to install any package locally , i.e only use that package in this project
// npm i <package>

// to install globally
// to use in every project
// npm i -g <package>

// i => install

// package.json 
// to create it
// 1. either manually
// 2. npm init (sstep by step process)
// 3. npm init -y (skips all the steps and then we can edit the file)   

// we are using lodash

const _ = require('lodash')

const items = [1 , [2 , [3 , [4 , [5]]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
