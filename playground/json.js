console.log(__dirname);
var obj = {
  name: 'Tao',
  age: 123
};
var stringObj = JSON.stringify(obj);
var parsedObj = JSON.parse(stringObj);
console.log(obj);
console.log(typeof stringObj);
console.log(stringObj);
console.log(stringObj === JSON.stringify(obj));
console.log(parsedObj);
