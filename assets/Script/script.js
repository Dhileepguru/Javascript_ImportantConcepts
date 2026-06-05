
// variables
var a=100;
console.log(a);
var a=200;// var can overwrite
console.log(a);

let b=500;
console.log(b);
// let b=200; // let can't overwrite

console.log("");

// let conBox=document.getElementsByClassName("con");

// let btn=document.getElementById("btn");
// function displayContent()
// {
//     for(let i=0;i<conBox.length;i++)
//     {
//     let tag=document.createElement('p');
//     tag.innerHTML="Destructing of array";
//     conBox[i].appendChild(tag);
//     btn.remove();
//     }
// };


// //Destructuring Concepts
// // It is used to split the values of arrays and objects to variables
// //two types
// // array destruct
// // object destruct


// //array destruct

// let arr=[1,2,3,4,5];

// const [x,y,z,...restVal]=arr;
// console.log(x,y,z,restVal);

// //object destruct

// let objVal= {
//     firstName:'dhileep',
//     lastName:'D',
//     Age:22,
//     mob:1234567890
// }

// const {firstName,lastName,Age: VoteAge,...restVal2}=objVal;

// console.log(firstName,lastName,VoteAge,restVal2);

// //Practice Destruct

// let arrVal=[45,32,4,3,67];

// const [num1,num2,num3,num4,...restval3]=arrVal;

// let con2=document.getElementsByClassName("con2")[0];

// let Ptag=document.createElement("p");
// Ptag.innerHTML=num1+num2+num3+num4+restval3;
// con2.appendChild(Ptag);

// //Array Methods 
 
// //tostring()

// let fruits =['apple','orange','mango']

// console.log(fruits);
// let ToStringVal=fruits.toString();
// console.log(ToStringVal);

// //Join()
// console.log(fruits.join(' and ')  );

// //Concat()

// let names=['guru','saran'];
// let names2=['Manoj'];

// let combinedVal=names.concat(names2);
// console.log(combinedVal);

// //splice
// // remove a values and add a value 
// combinedVal.splice(1,2,'dhileep','saritha');
// console.log(combinedVal);


// //slice
// // same like splice but here the original values will not be changed
// let sliceTest=combinedVal.slice(1,2);
// console.log(sliceTest);


// //indexOf()

// console.log(combinedVal.indexOf('dhileep'));

// combinedVal.push('dhileep');
// console.log(combinedVal);

// //lastIndexof

// console.log(combinedVal.lastIndexOf('dhileep'));

// //flat 
// //nested array to normal array

// let dummyArr=[1,2,3,4,[5,6],7,9];

// console.log(dummyArr.flat());

// dummyArr.push([10,11]);

// console.log(dummyArr);

// console.log(dummyArr.flat(2));


// //foreach
// let count=0;
// let fullArr=dummyArr.flat(2);
// fullArr.forEach(n=>
// {
//     // console.log(n);
//     count++;
// }
// )
// console.log("");

// console.log(count);

// //Map

// console.log(fullArr);
// let MappedArr=fullArr.map(n=>n*2);

// console.log(MappedArr);

// //Filter

// let AjaxArr=[
//     {name:'dhileep',age:22},
//     {name:'guru',age:17},
//     {name:'manoj',age:49},
// ]

// console.log(AjaxArr.filter(n=>n.age===22)
// );

// let jsonArr={
//     name:'dhileep',
//     age:22,
//     color:'red'
// };

// console.log(jsonArr.filter());

//Promises
//async await finally
 
async function PromiseTest()
{
  try{
    let response= await fetch('https://jsonplaceholder.typicode.com/users');
    var responseJson=await response.json();
    // responseJson.forEach(data=>{
    //     console.log(responseJson);
    // })
   console.log(responseJson[0].email);
   
  }
  catch(error)
  {
    console.log(error);
  }
};

PromiseTest();

//DOM 
// Element Selectors

// let ConT=document.getElementsByClassName("con");

// ConT.style.backGroundColor="red";
// var count=0;
// let CollToArr=Array.from(ConT)
// CollToArr.forEach(n=>
// {
  
//   if(count%2==0)
//   {
//   n.style.backgroundColor="red";
//   n.style.color="white";
//   }
//   else
//   {
//    n.style.backgroundColor="yellow";
//   n.style.color="black"; 
//   }
  
//   count++;
// }
// )

//Query selector

let container2=document.querySelector(".con");
let container3=document.querySelectorAll(".con");// nodelist

// let conToArr=Array.from(container);
container2.style.color="red";
container3.forEach(n=>{
  n.style.backgroundColor="yellow";
})

// let 

// console.log("con: ", conToArr[0]);







