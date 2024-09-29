// Built in module path which works with the path
const path = require('path');

// print the separator used , like \ or /
console.log(path.sep);

// joins diiferent paths
const filePath = path.join(`Web\z development\/`, 'node' , '5_path_module');
console.log(filePath);

// gives the topmost one from given parameters
console.log(path.basename(__filename));


// shows the absolute path , i.e , from root to others
console.log(path.resolve(__dirname , `Web\z development\/`, 'node' , '5_path_module'));