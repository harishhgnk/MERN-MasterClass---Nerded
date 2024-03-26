let names=document.querySelector(".name");
let contact=document.querySelector(".contact");
let member=document.querySelector(".member");
let container=document.querySelector(".container");
let empty=document.querySelector(".empty");
let main=document.querySelector(".main");
let title=document.querySelector(".title");
let addbtn=document.querySelector(".add");
let deletebtn=document.querySelector(".delete");
let box=document.getElementById("box")
let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let first=document.getElementById("first")
let second=document.getElementById("second")
let third=document.getElementById("third")

// function myDelete(e){
//     console.log('e.target', e.target);
// }




addbtn.addEventListener("click",function(event){
    event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","container")
div.innerHTML=`<h2>${names.value}</h2> 
<h2>${contact.value}</h2>

<h2>${one.checked?first.innerHTML:""}</h2>
<h2>${two.checked?second.innerHTML:""}</h2>
<h2>${three.checked?third.innerHTML:""}</h2>
<button id="removes">Delete</button>`

main.append(div)
// container.classList.add("container")
container.classList.add("main")
const removeElmt = document.getElementById('removes')
removeElmt.addEventListener("click",function(e){
    e.target.parentElement.remove();
})

})
