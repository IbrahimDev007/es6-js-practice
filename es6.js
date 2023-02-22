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

//acessing dom obj element

let student= {
name:'alex karry',
roll:12,
favouretPlace:{
    banglsdesh:['comilla','dhaka',"sylhet",'chottagram'],
    USA:['calfornia','los Angeles',{
        newyork:'new-york city'
    }],
  
},
function_Work:work=() =>{
    console.log('work  very hard');
    
}
}

//acess newyork
console.log(student.favouretPlace.USA[2]?.newyork);
// acessing without node 
try {
    // acessing sylhet bracket notation
    console.log(student['favouretPlace']['banglsdesh'][2]);  
} catch (error) {
    console.log('have some error in statement');
}function info(params) {

  let home ='comilla';
  console.log(home);

{
    let village='dhaka'
    console.log(village);
 
}
// scope local globAl 
// console.log(village);
}
info();
// map filter reduce find 
let age = [2,5,3,44];
let age1=age.map(func=>func*2)
let age2=age.filter(num=>num>3);
let age3=age2.find(num=> num<77);
let age4=age.filter((num,mun)=>num>mun);
let age5=age.reduce((cur,prev)=>(cur+prev),0);

console.log(age4,age5,age2,age1,age3);

