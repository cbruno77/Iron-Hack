/* The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values. 
for...in statement iterates over user-defined properties
*/

var car = {type:"Fiat", model:"500", color:"white"};
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

function dump_props(obj, obj_name) {
  let result = '';
  obj_name = obj_name || obj.constructor.name; // Get the object name
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '\n';
  }
  result += '<hr>';
  console.log(result);
}

dump_props(car, 'car');
dump_props(car);


/*
we must use the hasOwnProperty method to check that the member in fact belongs to the object.
*/

var personObject = {
    firstName : "John",
    lastName : "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;

for (var member in personObject) 
{
  if (personObject.hasOwnProperty(member)) 
  {
    console.log("the member: " + member + " of personObject is " + personObject[member]);
  }
}