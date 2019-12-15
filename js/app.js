document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#button-all');
  deleteAllButton.addEventListener('click', handleDeleteAllButton);

});

const handleFormSubmit = function(event){
  event.preventDefault();

  const vapourListItem = createVapourListItem(event.target);
  const vapourList = document.querySelector('#vapour-list');
  vapourList.appendChild(vapourListItem);

  event.target.reset()
}

const createVapourListItem = function (form){
  const vapourListItem = document.createElement('li');
  vapourListItem.classList.add('vapour-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  vapourListItem.appendChild(title);

  const publisher = document.createElement('h3');
  publisher.textContent = form.publisher.value;
  vapourListItem.appendChild(publisher);

  const platform = document.createElement('p');
  platform.textContent = form.platform.value;
  vapourListItem.appendChild(platform);

  const deleteItem = document.createElement('button');
  deleteItem.innerHTML = "Delete Item"
  deleteItem.id = "button-item";
  vapourListItem.appendChild(deleteItem);
  deleteItem.addEventListener('click', handleDeleteItemButton);


  return vapourListItem;
}

const handleDeleteAllButton = function (event){
  const vapourList = document.querySelector('#vapour-list');
  vapourList.innerHTML = '';
}

const handleDeleteItemButton = function (event){
  // const vapourList = document.getElementById('.vapour-list-item');
  this.parentNode.parentNode.removeChild(this.parentNode);
}
