//The unary negation operator precedes its operand and negates it.

var x = 3;
y = -x; // y = -3, x = 3

// Unary negation operator can convert non-numbers into a number
var x = "4";
y = -x; // y = -4


+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN