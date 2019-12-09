/*
When you use continue with a label, it applies to the looping statement identified with that label
*/

let i = 0;
let n = 0;

while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(i);
}