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
}function namek(params) {

  let home ='comilla';
  console.log(home);

{
    let village='dhaka'
    console.log(village);
 
}
// scope local globAl 
// console.log(village);
}
namek()
