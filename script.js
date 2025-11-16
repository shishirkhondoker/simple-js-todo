function addToDo(){
    
    let toDoInput = document.getElementById("taskInput").value;

    if(toDoInput === ""){
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
   console.log(toDoInput);
   let listItem = document.createElement("li");
    listItem.textContent = toDoInput;
   taskList.appendChild(listItem);
    document.getElementById("taskInput").value = "";

    checkBoxBtn(listItem);
   doneButton(listItem);
   deleteButton(listItem);
   
  
}


function doneButton(listItem){
    let doneBtn = document.createElement("button");
    doneBtn.classList.add('doneBtn');
    doneBtn.textContent = "Done";
    doneBtn.onclick = function(){
        checkBoxBtnChecked(listItem);

    }
    listItem.appendChild(doneBtn);
    
}

function deleteButton(listItem){
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete";   
    listItem.appendChild(deleteBtn);
    deleteBtn.onclick = function(){
        listItem.remove();
    }
}

function checkBoxBtn(listItem){
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkBox");
    listItem.appendChild(checkBox);
    checkBox.onchange = function(){
    }
}

function checkBoxBtnChecked(listItem){
    let checkBox = listItem.querySelector(".checkBox");
    checkBox.checked = true;
    checkBox.classList.remove("checkBox");
    listItem.style.textDecoration = "line-through";
    listItem.style.color = "gray";
    
    listItem.querySelector(".doneBtn").textContent = "Undone";
   

    if(checkBox.checked){
        listItem.querySelector(".doneBtn").onclick = function(){
            checkBoxBtnUnchecked(listItem);
        }   
}
}

function checkBoxBtnUnchecked(listItem){
    let checkBox = listItem.querySelector("input[type='checkbox']");
    checkBox.checked = false;
    checkBox.classList.add("checkBox");
    listItem.querySelector(".doneBtn").textContent = "Done";
    listItem.style.textDecoration = "none";
    listItem.style.color = "black";
    if(!checkBox.checked){
        listItem.querySelector(".doneBtn").onclick = function(){
            checkBoxBtnChecked(listItem);
        }
    }
}
