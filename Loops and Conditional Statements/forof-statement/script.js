/* 
The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:
*/

const arr = [3, 5, 7];
arr.foo = 'hello';


for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}

for (let i of arr.foo) {
   console.log(i); // logs hello
}