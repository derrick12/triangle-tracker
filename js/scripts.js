var a = parseInt(prompt("Enter the side of A"));
var b = parseInt(prompt("Enter the side of B"));
var c = parseInt(prompt("Enter the side of C"));

if (a === b && b === c) {
  alert("This is an equilateral Triangle");
}

else if (a === b || b===c || a===c ) {
  alert("This is an isosceles Triangle");
}

else if ( a+b>c || b+c>=a || a+c<=b ) {
  alert("This is an scalene Triangle");
}
