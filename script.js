let todolist = [];
displayItem()

function addtodo(){
    let inputitem = document.querySelector('#input_element');
    let todoitem = inputitem.value;
    todolist.push(todoitem);
    inputitem.value = '';
    displayItem()
}
function displayItem(){
    let displayElement = document.querySelector('#todo-items')
    let newhtml = '';
    for (let index = 0; index < todolist.length; index++) {
       newhtml += `
       <div>
       <span>${todolist[index]}<span>
       <button onclick=" todolist.splice(${index},1); displayItem() ">Delete</button>
       </div>
       `
        
    }
    displayElement.innerHTML = newhtml;
}