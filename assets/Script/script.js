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
