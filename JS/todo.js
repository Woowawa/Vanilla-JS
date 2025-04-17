const toDoForm = document.querySelector("#todo-form");
const toDoInput =  toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const deleteTarget = event.target.parentElement;
    toDos = toDos.filter( (item) => {return item.id !== parseInt(deleteTarget.id)});
    saveToDos();
    deleteTarget.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText  = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = {id: Date.now(), 
        text: toDoInput.value
    };
    toDoInput.value = "";
    toDos.push(newToDo);
    saveToDos();
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos =parsedToDos;
    parsedToDos.forEach(paintToDo);
}