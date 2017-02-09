console.log(myFunction(2, 1)); // I am calling my function with different parameters on the first three lines.
console.log(myFunction(1, 2));
console.log(myFunction(1, 1));

function myFunction (a, b) { // I created my function.
	if (a > b) { // This is my first conditional statement.
  return ("The first number was bigger!"); // If the condition above is true, the function will return this string. Otherwise, it will move to the next conditional.
} else if (a < b) { // This is my second conditional statement.
  return ("The second number was bigger!"); // If the condition above is true, the function will return this string. Otherwise, it will move the next conditional.
} else if (a === b) { // This is my last conditional statement.
  return ("The numbers are the same!"); // If the condition above is true, the function will return this string.
  }
}
