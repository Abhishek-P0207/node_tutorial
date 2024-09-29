const os  = require('os');

// info abt user
const user = os.userInfo();
console.log(user);

// info about system uptime
console.log(`the system uptime is ${os.uptime/3600}hr`);

//
const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentOS);

