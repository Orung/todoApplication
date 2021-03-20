// creating variables
let userName = document.querySelector('#landing_page');
let submitName = document.querySelector('#submitName');
let userInput = document.querySelector('#fullname');

// event listeners
submitName.addEventListener('submit', getUsername);

function getUsername(e){
  e.preventDefault();
  if(userInput.value === ""){
    let errorMess = document.createElement('p');
    errorMess.innerHTML = 'Please provide at least your first name';
    userName.appendChild(errorMess).style.color = 'red';
  }else{
    userName.classList.add('d-none');
    alert(`Hi ${userInput.value} your submission is successfull`);
    userName.classList.add('d-none');
  }
}

//