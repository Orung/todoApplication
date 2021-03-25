// creating variables
let userName = document.querySelector('#landing_page');
let submitName = document.querySelector('#submitName');
let userInput = document.querySelector('#fullname');
let addTodoDiv = document.querySelector('#addTodoDiv');
let displayUserName = document.querySelector('#displayUserName');
let addTodoForm = document.querySelector('#addTodoForm');
let todoInput = document.querySelector('#todoInput');
let todoUl = document.querySelector('#todoUl')
let todoList = document.querySelector('#category');
let completedTodo = document.querySelector('#completed');
let waitingTodo = document.querySelector('#waiting');
let allTodos = document.querySelector('#all');
let nextIcon = document.querySelector('#next-todos');
let showInput = document.querySelector('#showInput')
let viewTodo = document.querySelector('#next-todos');


// event listeners
document.addEventListener('DOMContentLoaded', getFromLocalStorage )
submitName.addEventListener('submit', getUsername);
addTodoForm.addEventListener('submit', createTodo);
todoUl.addEventListener('click', removeItem);
completedTodo.addEventListener('click', getCompletedTodo);
waitingTodo.addEventListener('click', getwaitingTodo);
allTodos.addEventListener('click', getAllTodos);
// nextIcon.addEventListener('click', getAllTodosContent);
showInput.addEventListener('click', showTodoInput);
viewTodo.addEventListener('click', viewTodoInput);


// functions
function getUsername(e){
  e.preventDefault();
  if(userInput.value === ""){
    let errorMess = document.createElement('p');
    errorMess.innerHTML = 'Please provide at least your first name';
    userName.appendChild(errorMess).style.color = 'red';
  }else{
    userName.classList.add('d-none');
    alert(`Hi ${userInput.value} your submission is successfull`);
    addTodoDiv.classList.remove('d-none');
    displayUserName.innerHTML = userInput.value.toUpperCase()
  }
}

//creating todo
function createTodo(x){
  x.preventDefault();
  console.log(todoInput.value)
  if(todoInput.value === ''){
    alert('please enter a todo to proceed')
  }else{
    addTodoDiv.classList.add('d-none');
    todoList.classList.remove('d-none');
    let todoLi = document.createElement('li');
    todoLi.classList.add('background-white');
  
    // ccreating todo span
    let todoText = document.createElement('span');
    todoText.innerHTML = todoInput.value;

    // window.localStorage.setItem("todo", todoInput.value);
    saveToLocalStorage(todoInput.value)
    todoLi.appendChild(todoText);

    // creating todos button
    // creating edit buttons
    let todoEdit = document.createElement('button');
    todoEdit.classList.add('btn-default')
    todoEdit.innerHTML = '<i class="done fa fa-check"></i>'
    todoLi.appendChild(todoEdit);

    //creating delete
    let todoDelete= document.createElement('button');
    todoDelete.classList.add('btn-default');
    todoDelete.innerHTML = '<i class="remove fa fa-trash"></i>';
    todoLi.appendChild(todoDelete);

    // appending all list to the ul parent element
    todoUl.appendChild(todoLi);

    todoInput.value = "";

  }
}


//removing todos
function removeItem(e){
  let item = e.target;
  //removing todos
  if (item.classList[0] === 'remove'){
    item.parentElement.parentElement.remove();
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos= JSON.parse(localStorage.getItem('todos'));
    }
    let todoIndex = item.parentElement.parentElement.children[0].innerHTML;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  //mark as done
  else if (item.classList[0] === 'done'){
    item.parentElement.parentElement.classList.toggle("completed");
  }
}


// checking for completed todos
function getCompletedTodo(e){
  let todoCompleted = Array.from(todoUl.children);
  // console.log(todoCompleted);
  todoCompleted.forEach((todo) =>{
    if(todo.classList.contains("completed")){
      todo.style.display = "flex";
    }else{
      todo.style.display = 'none';
      // let paragraph = document.createElement('p');
      // paragraph.innerHTML = "no completed todos";
      // todoUl.appendChild(paragraph);
    }
  })
}

// checking for uncompleted todos
function getwaitingTodo(e){
  let todoWaiting = Array.from(todoUl.children);
  todoWaiting.forEach((todo) =>{
    if(!todo.classList.contains("completed")){
      todo.style.display = "flex";
    }else{
      todo.style.display = 'none';
    }
  })
}

// getting all todos
function getAllTodos(e){
  let todoWaiting = Array.from(todoUl.children);
  todoWaiting.forEach((todo) =>{
    if(!todo.classList.contains("completed") || todo.classList.contains("completed")){
      todo.style.display = "flex";
    }else{
      todo.style.display = 'none'
    }
  })
}

// save to local storage
function saveToLocalStorage(todo){
 let todos;
 if (localStorage.getItem("todos") === null) {
   todos = [];
 } else {
   todos= JSON.parse(localStorage.getItem('todos'));
 }
 todos.push(todo);
 localStorage.setItem('todos', JSON.stringify(todos));
}

function getFromLocalStorage(){
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos= JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach((todo) =>{
    userName.classList.add('d-none');
    addTodoDiv.classList.add('d-none');
    todoList.classList.remove('d-none');
    let todoLi = document.createElement('li');
    todoLi.classList.add('background-white');
  
    // ccreating todo span
    let todoText = document.createElement('span');
    todoText.innerHTML = todo;

    todoLi.appendChild(todoText);

    //creating todos button
    // creating edit buttons
    let todoEdit = document.createElement('button');
    todoEdit.classList.add('btn-default')
    todoEdit.innerHTML = '<i class="done fa fa-check"></i>'
    todoLi.appendChild(todoEdit);

    //creating delete
    let todoDelete= document.createElement('button');
    todoDelete.classList.add('btn-default');
    todoDelete.innerHTML = '<i class="remove fa fa-trash"></i>';
    todoLi.appendChild(todoDelete);

    // appending all list to the ul parent element
    todoUl.appendChild(todoLi);
  });
}


// Icons
function showTodoInput(){
  addTodoDiv.classList.remove('d-none');
  todoList.classList.add('d-none');
}

function viewTodoInput(){
 if(localStorage.geItem("todos") === null){
  alert('You don\'t have any todo yet. Add a todo to view list of todos');
 }else{
  addTodoDiv.classList.add('d-none');
  todoList.classList.remove('d-none')
 }
}