/*

    1.Write a javascript function named is_integer which checks if the passed argument is an integer. You can use any mathematical operator or functions defined in the Math object.
    2.Using the forEach function defined for an array, find the sum of the array of numbers. [function add_all(arr) {...}]
    3.Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]
    4.Write a factorial function that returns the factorial of a given number, n. Make sure you return the calculated value and not just print it. [function factorial(n){...}]

*/
function isInteger(n) {
  return Number.isInteger(n);
}

function arraySum(arr) {
  var sum = 0;
  arr.forEach(function(e) {sum+=e;});
  return sum;
}

function tempConverter(from, temp) {
  if(from=="celsius")
    return  ((9*temp)/5)-32;
  else if (from=="fahrenheit") {
    return ((temp-32)*5)/9;
  }
}

function factorial(n) {
  var fact = 0;
  for (var i = 1; i <= n; i++) {
    fact*=i;
  }
  return fact;
}
