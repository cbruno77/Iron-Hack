// Initialize function to test if a number is even
const isEven = (x) => {
    // If the remainder after dividing by two is 0, return true
    if (x % 2 === 0) {
      console.log(true);
    } else {
      // If the number is odd, return false
      console.log(false);
    }
    
}

// Test the number
isEven(12);