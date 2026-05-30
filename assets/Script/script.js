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