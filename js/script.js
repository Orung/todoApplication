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


// event listeners
submitName.addEventListener('submit', getUsername);
addTodoForm.addEventListener('submit', createTodo);
todoUl.addEventListener('click', removeItem);
completedTodo.addEventListener('click', getCompletedTodo);



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
    displayUserName.innerHTML = userInput.value
  }
}

//creating todo
function createTodo(x){
  x.preventDefault();
  console.log(todoInput.value)
  if(todoInput.value === ''){
    alert('please enter a todo to proceed')
  }else{
    // addTodoDiv.classList.add('d-none');
    todoList.classList.remove('d-none');
    let todoLi = document.createElement('li');
    todoLi.classList.add('background-white');
  
    // ccreating todo span
    let todoText = document.createElement('span');
    todoText.innerHTML = todoInput.value;
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
  }
}


//removing todos
function removeItem(e){
  let item = e.target;
  //removing todos
  if (item.classList[0] === 'remove'){
    item.parentElement.parentElement.remove();
  }
  //mark as done
  else if (item.classList[0] === 'done'){
    item.parentElement.parentElement.classList.toggle("completed");
  }
}

function getCompletedTodo(e){
  if (document.body.child === 'completed'){
    console.log('yea there is');
  }else{
    console.log('it didint work')
  }
}