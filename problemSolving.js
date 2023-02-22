// problem 2 str length even odd
let even =(arr)=>{
    let newArr=[]
   for (const name of arr) {
   
     if(name.length%2 == 0)
    newArr.push(name)
   } 
   return newArr;
}
console.log(even(['salam','kalam','jamila','kawser']));

//problem 3 sqr eVERY ELEMENT  calculate squre element  avarege square element;

let sqrAvg = (sqr)=>{
    let sqrs=0;
    
for (let i = 0; i < sqr.length; i++) {
    sqrs=sqrs+Math.pow(sqr[i],2)

};
return sqrs/sqr.length

}

console.log(sqrAvg([2,3,6,23,55]));


// problem 4 
//map
const arrOdd =[ 1, 3, 5, 7, 9 ];

const addOdd=arrOdd.map((arr)=>arr+1);

console.log(addOdd);

// for loop section 

let arrOutput=[]
for (let index = 0; index < arrOdd.length; index++) {
    const element = arrOdd[index]+1;
     arrOutput.push(element)    
}
console.log(arrOutput);
//2nd section 
//filter
const arrNum= [33, 50, 79, 78, 90, 101, 30 ];
const arr10=arrNum.filter(arr=>arr%10);
console.log(arr10);
// 3rd section 
// find 
const arrFin=arrNum.find(arr=>arr%10);
console.log(arrFin);

// problem 5 reduce 

//add with reduce
reduceNum=[ 1, 9, 17, 22 ]
let sum=0;
let reduceAdd=[ 1, 9, 17, 22 ].reduce((cur,prev) => (cur+prev),0)
console.log(reduceAdd);
for (let index = 0; index < reduceNum.length; index++) {
    const prev=reduceNum[index];
    sum=sum+prev;
    console.log(sum);
}
console.log(sum);

//reduce in obj properties
const pepole=[
    {name:'mena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22},
]

let ageAdd=pepole.reduce((curr,prev)=>(curr+prev.age),0);
console.log(ageAdd);



