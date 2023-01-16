const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList= document.querySelector(".todo-list")
const fomr = document.querySelector(".fomr")


function addTodo(event){
    event.preventDefault()

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    
    const newTodo =document.createElement("li")
    newTodo.innerText=todoInput.value
    newTodo.classList.add("todo-list")
    todoDiv.appendChild(newTodo)
    
    const completeButton =document.createElement("button")
    completeButton.innerHTML='<i class="fas fa-check" </i>'
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton)
    
    todoList.appendChild(newTodo)
}

todoButton.addEventListener("click", addTodo)