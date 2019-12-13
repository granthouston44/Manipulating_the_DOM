document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleFormSubmit);

  // const deleteAllButton = document.querySelector('#delete-all');
  // deleteAllButton.addEventListener('click', handleDeleteAllButton);
  //
  // const deleteItemButton = deleteItemButton.addEventListener('click', handleDeleteItemButton);

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

    vapourListItem.textContent = `Title: ${this.title.value}, Publisher: ${this.publisher.value}, Platform: ${this.platform.value}`
    return vapourListItem;
  }
