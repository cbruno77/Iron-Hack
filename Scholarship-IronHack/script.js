var number = Number(window.prompt("Type a number", "")); 

function receber(number) {
  

var i = number;
while (i > 1) {
  i--; 
    if ((i % 3) === 0 && (i % 5) === 0) {
      console.log(i + " Ironhack");
    } 
    else if (i % 3 === 0) {
      console.log(i + " Iron");   
    }  
    else if (i % 5 === 0) {
      console.log(i + " Hack"); 
    }
    else if ((i % 7) === 0 ) {
      continue;
    } 
    else if ((i % 10 === 0) || (i % 16 === 0)) {
      console.log(i + " “WebDev”");
    } 
    else if ((i % 2 === 0) && ((i-1) % 10 === 0)) {
      console.log(i + " Bootcamp");
    } 
  }
}  
 receber(number);




// -------------------- QUESTIONS ------------------
// 1 - Print to the console a list of numbers from 1 to 100






// 2 - For all numbers that are divisible by 3, you must print "Iron" to the console instead of the number



// 3 - For all numbers that are numbers divisible by 5, you must print "Hack" to the console instead of the number

// 4 - For numbers which are multiples of both 3 and 5 print Ironhack 

// 5 - Skip all numbers divisible by 7

// 6 - If the number is divisible by 10 or 16, you must print “WebDev”

// 7 - Change the list order and print out the numbers from 100 to 1

// 8 - When a number is not divisible by 2 and the previous number is divisible by 10, you must print Bootcamp"

// 9 - Adapt the code into a function that receives a number as an argument, that number will correspond to the length of the list, and call that function once is defined

