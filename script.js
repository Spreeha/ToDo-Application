const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//const list = document.getElementById('todo-list')
var itemCountSpan = document.getElementById('item-count')
var uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  /*alert('New TODO button clicked!')*/
  var task = prompt("Enter your task ");
  var list = document.createElement("li");
  var label = document.createTextNode(task);

  /*var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "myCheck");*/
  //check.setAttribute("onclick","myFunction()")
  if(task!=null)
  {
    list.innerHTML = `<input type="checkbox" onclick="myFunction()" class= 'myCheck'>`;
    //list.appendChild(check);
    list.appendChild(label);

    var element = document.getElementById("todo-list");
    element.appendChild(list);

    var items = Number(itemCountSpan.innerHTML)+1;
    itemCountSpan.innerHTML=items
  }

  var count = 0;
  var uncheck = items - count;
  uncheckedCountSpan.innerHTML=uncheck

  function myFunction(){
    alert('hello!')
    var myChecklist = document.getElementsById("myCheck");
    var i;
    for (i = 0; i < myChecklist.length; i++) {
      if(myChecklist[i].checked)
        {
            count = count + 1;
            var uncheck = items - count;
            alert(uncheck)
            uncheckedCountSpan.innerHTML=uncheck

        }
    }
    alert('hello!')
  };

  /*
  function myFunction() {
    var myChecklist = document.getElementsById("myCheck");
    var i;
    for (i = 0; i < myChecklist.length; i++) {
      if(myChecklist[i].type == checkbox && myChecklist[i].checked === true)
        {
            count = count + 1;
            var uncheck = items - count;
            alert(uncheck)
            uncheckedCountSpan.innerHTML=uncheck

        }
    }
    alert('hello!')
  }
  */

    /*
    var myChecklist = document.getElementsByTagName("INPUT");
    var i;
    for (i = 0; i < myChecklist.length; i++) {
      if(myChecklist[i].type == checkbox && myChecklist[i].checked === true)
        {
            count = count + 1;
            var uncheck = items - count;
            alert(uncheck)
            uncheckedCountSpan.innerHTML=uncheck

        }
    }
    */




  /*document.write('Number of total items '+items)
  console.log('Number of unchecked items '+uncheckedCountSpan)*/
}
