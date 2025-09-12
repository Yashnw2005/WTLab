
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list");

function addTask(){
    if (inputBox.value.trim()===''){
        alert("Please write a task before adding!");
        return;
    }

    let li=document.createElement("li");
    li.textContent=inputBox.value;

    // Add close button
    let span=document.createElement("span");
    span.textContent="\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value="";
    saveData();
}g

// Toggle checked class or delete task
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save tasks to localStorage
function saveData() {
    localStorage.setItem("todoList",listContainer.innerHTML);
}

// Show tasks from localStorage
function showTask() {
    listContainer.innerHTML=localStorage.getItem("todoList");
}

showTask();
