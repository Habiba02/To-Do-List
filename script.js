const todoInput = document.querySelector('.todoinput');
const todoButton = document.querySelector('.todobutton');
const todoList = document.querySelector('.todolist');
const filterOption = document.querySelector('.filtertodo');

todoButton.addEventListener('click', addtodo);
todoList.addEventListener('click', deletecheck);
filterOption.addEventListener('click', filterTodo);


function addtodo(event){
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todoitem');
    todoDiv.appendChild(newTodo);

    //complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML= '<i class="fa-solid fa-check"></i>';
    completeButton.classList.add('completebutton');
    todoDiv.appendChild(completeButton);
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML= '<i class="fa-solid fa-xmark"></i>';
    deleteButton.classList.add('deletebutton');
    todoDiv.appendChild(deleteButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear input 
    todoInput.value = "";
    }
function deletecheck(event){
    const item = event.target;
    //delete
    if(item.classList[0] === 'deletebutton'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove();

        });
    }
    //check
    if(item.classList[0] === 'completebutton'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) { 
        const mStyle = todo.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}