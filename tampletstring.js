const str1="adam smith";
const str2='jenifer';
const str3=`patric`;
console.log(str1,str2,str3);
//  arrow function
let add = (first,seceond) => first+seceond;
//array reference problem

let number=[56,4,55];
let numbers=number;
numbers.push(4,5)
console.log(number,numbers);//same value
numbers=[...number,45];
console.log(numbers);
// distructuring
const  {x,y,...c}={x:2,y:3,name:'sakib' ,saleery:22};
console.log(c);