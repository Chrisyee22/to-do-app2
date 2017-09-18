function onReady(){
  var toDos =[];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
    renderTheUI(toDos);

  }//createNewToDo

  function renderTheUI(toDos){
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';


    toDos.forEach(function(toDo){
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
  addToDoForm.addEventListener('submit', function (event){
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI(toDos);


deleteToDo.addEventListener('click' , deleteList );
}//onReady

function deleteList(event){
  event.preventDefault();
//Goal:delete checked items
// When a button is clicked go over all li elements
const deleteToDoForm = document.querySelector('#toDoList');
  // event.preventDefault();
const listItems = deleteToDoForm.querySelectorAll ('li');
  // loop over all elements
  for (var i=0 ; i < listItems.length ; i++){
    let currentLi = listItems[i];
    let checkbox= currentLi.querySelector('input[type="checkbox"]');

    //check for li elements
  //check to see if box is checked

        if(checkbox.checked ===true){
          //if box is checked identifiy element
         //delete elements that are identified as checked

         deleteToDoForm.removeChild(currentLi);
        }



    }


}


window.onload = function(){

   onReady();
};
