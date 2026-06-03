let conBox=document.getElementsByClassName("con");

let btn=document.getElementById("btn");
function displayContent()
{
    for(let i=0;i<conBox.length;i++)
    {
    let tag=document.createElement('p');
    tag.innerHTML="Destructing of array";
    conBox[i].appendChild(tag);
    btn.remove();
    }
};


//Destructuring Concepts
// It is used to split the values of arrays and objects to variables
//two types
// array destruct
// object destruct


//array destruct

let arr=[1,2,3,4,5];

const [x,y,z,...restVal]=arr;
console.log(x,y,z,restVal);

//object destruct

let objVal= {
    firstName:'dhileep',
    lastName:'D',
    Age:22,
    mob:1234567890
}

const {firstName,lastName,Age: VoteAge,...restVal2}=objVal;

console.log(firstName,lastName,VoteAge,restVal2);

//Practice Destruct

let arrVal=[45,32,4,3,67];

const [num1,num2,num3,num4,...restval3]=arrVal;

let con2=document.getElementsByClassName("con2")[0];

let Ptag=document.createElement("p");
Ptag.innerHTML=num1+num2+num3+num4+restval3;
con2.appendChild(Ptag);

//Array Methods 
 
//tostring()

let fruits =['apple','orange','mango']

console.log(fruits);
let ToStringVal=fruits.toString();
console.log(ToStringVal);

//Join()
console.log(fruits.join(' and ')  );

//Concat()

let names=['guru','saran'];
let names2=['Manoj'];

let combinedVal=names.concat(names2);
console.log(combinedVal);

//splice
// remove a values and add a value 
combinedVal.splice(1,2,'dhileep','saritha');
console.log(combinedVal);


//slice
// same like splice but here the original values will not be changed
let sliceTest=combinedVal.slice(1,2);
console.log(sliceTest);


//indexOf()

console.log(combinedVal.indexOf('dhileep'));

combinedVal.push('dhileep');
console.log(combinedVal);

//lastIndexof

console.log(combinedVal.lastIndexOf('dhileep'));






