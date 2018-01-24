var button = document.getElementsByClassName('list');
button[0].addEventListener("click", addList);


function addList () {
  var newDiv = document.createElement('div');
  var content = document.createElement('textarea');
  var inputContainer = document.createElement('button');
  var crossOut = document.createElement('button');
  newDiv.classList.add('box-list');
  newDiv.class ='box-list';
  content.classList.add('list-textarea');

  inputContainer.classList.add('keep-button');
  inputContainer.class='keep-button';
  inputContainer.innerHTML = "Guardar";
  crossOut.classList.add('cross-out-button');
  crossOut.class='cross-out-button';
  crossOut.setAttribute('onclick', 'byeDiv()');
  crossOut.innerHTML = "X";


  newDiv.appendChild(content);
  newDiv.appendChild(inputContainer);
  newDiv.appendChild(crossOut);

  var where = document.getElementbyId('main');
  where.appendChild(newDiv);

  var keepButton = document.getElementsByClassName('keep-button');
  keepButton[0].addEventListener('click', openListNameContainer);

  console.log(keepButton);
}

