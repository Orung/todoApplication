let inputField = document.querySelector('#input');
let addtodo = document.querySelector('#addtodo');
let list = document.querySelector('ul');
let todos = document.querySelector('.todos');
let todoContainer = document.querySelector('#todo-list');

// EventListener 
addtodo.addEventListener("click", addList);
todoContainer.addEventListener('click', deleteTodo);

// functions
function addList(e){
  e.preventDefault();
  let todoDiv = document.createElement('div');
  todoDiv.classList.add("todo-content")
//  creating todo list
  let todolist = document.createElement('li');
  todolist.innerHTML = inputField.value;
  todolist.classList.add('todos');
  todoDiv.appendChild(todolist);
  // saveLocalStorage(inputField.value);
  // Creating the check icon

  let completedIcon = document.createElement('button');

  // check icon
  // let checkIcon = document.createElement('span');
  completedIcon.innerHTML = '<i class="completed fa fa-check"></i>';
  todoDiv.appendChild(completedIcon);
   
  //Check edit icon
  let editIcon = document.createElement('button');
  editIcon.innerHTML = '<i class="edit fa fa-edit"></i>';
  todoDiv.appendChild(editIcon);
  
//trash icon
  let deleteIcon = document.createElement('button');
  deleteIcon.innerHTML = '<i class="trash fa fa-trash"></i>';
  todoDiv.appendChild(deleteIcon);

  list.appendChild(todoDiv);
  inputField.value = "";

  //setting Date
  let today = new Date();
  let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
  let todoDate = document.createElement('p');
  todoDate.innerHTML = date;
  todoDiv.appendChild(todoDate);
}

function deleteTodo(e){
 let item = e.target;
 if(item.classList[0] === 'trash'){
   let rmTodo = item.parentNode.parentNode;
   rmTodo.classList.add('transition');
   rmTodo.addEventListener('transitionend', () =>{
    rmTodo.remove();  
   })
  
   
 }
 if(item.classList[0] === 'completed'){
  let rmTodo = item.parentNode.parentNode;
  rmTodo.classList.toggle('done');
  
}
}


// function saveLocalStorage(todo){
//   let todos;
//   if(localStorage.getItem("todos") === null){
//     todos = [];
//   }else{
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
//   todos.push(todo);
//   localStorage.setItem('todos', JSON.stringify(todos));
// }
