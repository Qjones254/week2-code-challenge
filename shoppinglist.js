//write an array to store the items in list
const shoppingList=[];
//this enables functionality in the input section
const inputBox=document.getElementById("input-box");
//this enables functionality in the list container
const  listContainer=document.getElementById("list-container");
//this adds functionality to the clear list button
const b3=document.getElementById('b3')
//add function to the add button
function addTask(){
    //if there is no input it returns this
    if(inputBox.value==''){
        alert("Write something");
    }

else{
let li =document.createElement("li");
li.innerHTML=inputBox.value;
listContainer.appendChild(li);
//the u00d7 is an X sign that removes items from the list
let span = document.createElement("span")
span.innerHTML = "\u00d7";
li.appendChild(span);
}
inputBox.value="";
}
//this enables the input to be stored in the list container
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}
//This enables the user to remove items from the list
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}
},false)
//this function will clear all the items on the list using the clear list button
function clearList(){
iflistContainer.length=0;
renderList();
}
b3.addEventListener('click',clearList);
