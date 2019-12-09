const a = [2,2,3,3,5,6,6,9,9];
let theValue = 5;

for ( i=0; i < a.length;  i++) {
  console.log(a[i]);
  if ( a[i] === theValue ){
    break;
  }
}

