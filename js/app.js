document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllButton);

  const deleteItemButton = deleteItemButton.addEventListener('click', handleDeleteItemButton);

});

const handleFormSubmit = function(event){
  event.preventDefault();

  const vapourListItem = createVapourListItem(this);
  const vapourList = document.querySelector('#vapour-list');
  vapourList.appendChild(vapourListItem);

  this.reset()
  }


  const newListItem = document.createElement('li');
  newListItem.textContent = `Title: ${this.title.value}, Publisher: ${this.publisher.value}, Platform: ${this.platform.value}`
