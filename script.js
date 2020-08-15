const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const element = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  /*alert('New TODO button clicked!')*/
  var task = prompt("Enter your task ");
  var list = document.createElement("li");
  list.setAttribute("class","myList")
  var label = document.createTextNode(task);

  var delbutton = document.createElement("button");
  delbutton.setAttribute("class","dbutton")
  var dellabel = document.createTextNode("Delete");
  delbutton.appendChild(dellabel);

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "myCheck");
  //check.setAttribute("onclick","myFunction()")
  if(task!=null)
  {
    list.appendChild(check);
    list.appendChild(label);
    list.appendChild(delbutton);

    element.appendChild(list);

    var items = Number(itemCountSpan.innerHTML)+1;
    itemCountSpan.innerHTML=items
  }

  let count=0;
  var uncheck = Number(uncheckedCountSpan.innerHTML)
  uncheckedCountSpan.innerHTML=uncheck+1

  check.addEventListener("click", function() {
    uncheck = Number(uncheckedCountSpan.innerHTML)
    if(this.checked)
      uncheck = uncheck - 1;
    else
      uncheck = uncheck + 1;
    uncheckedCountSpan.innerHTML=uncheck
  });


  delbutton.addEventListener("click", function() {
    this.parentNode.remove();
    items = Number(itemCountSpan.innerHTML) - 1;
    itemCountSpan.innerHTML=items
    uncheck = Number(uncheckedCountSpan.innerHTML) - 1;
    uncheckedCountSpan.innerHTML=uncheck

  });

}
