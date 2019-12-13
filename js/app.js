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

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    vapourListItem.appendChild(title);

    const publisher = document.createElement('h3');
    publisher.textContent = form.title.value;
    vapourListItem.appendChild(publisher);

    const platform = document.createElement('p');
    platform.textContent = form.title.value;
    vapourListItem.appendChild(platform);

    return vapourListItem;
  }
