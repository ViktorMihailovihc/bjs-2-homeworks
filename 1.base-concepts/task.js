"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let x1 = "";
  let x2 = "";
  
  if (d === 0) { x1 = -b/(2*a); arr.push(x1); console.log(arr); 
  } else 
  if (d < 0) {console.log(arr);
  } else
  if (d > 0) {x1 = (-b + Math.sqrt(d) )/(2*a);
x2 = (-b - Math.sqrt(d) )/(2*a); arr.push(x1,x2); console.log(arr);}
  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
