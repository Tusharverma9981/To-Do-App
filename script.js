let todolist = [];

function addtodo(){
    let inputitem = document.querySelector('#input_element');
    let todoitem = inputitem.value;
    todolist.push(todoitem);
    inputitem.value = '';
}