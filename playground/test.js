const fs = require('fs');
const os = require('os');
var obj = {
  name: 'Tao',
  age: '30'
};
var stringObj = JSON.stringify(obj);
fs.appendFile('log.txt', stringObj + os.EOL, (err) => {
  if(err){
    return console.log('Error: ' + err);
  }
  fs.readFile('log.txt', (err, data) => {
    if(err){
      return console.log('Error: ' + err);
    }
//    var str = JSON.parse(data);
    console.log(`The content is ${data}.`);
  });
});

