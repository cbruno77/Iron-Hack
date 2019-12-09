if (confirm("Are u John Doe?")) 
{
  console.log("Hello John!!!");
} else {
  console.log("What is your name?");
}

var notTrue = false;
if (!notTrue)
{
    console.log("not not true is true!");
}


function checkNumber(myNumber)
{
    // TODO: write your code here
    if ( myNumber == 42 ) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}
checkNumber(3);
checkNumber(7);
checkNumber(42);