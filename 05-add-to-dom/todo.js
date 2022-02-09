let btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', function(){
    let taskName = document.querySelector('#newTask').value;

    let taskElement = document.createElement('li');
    taskElement.innerHTML = taskName;

    let parentElement = document.querySelector('#todos');
    parentElement.appendChild(taskElement);



})