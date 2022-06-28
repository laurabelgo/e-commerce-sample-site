import ItemsController from './itemsController.js';

const itemsController = new ItemsController();
const newItem = document.querySelector('#add-item');

newItem.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItemNameInput = document.querySelector('#name');
    const newItemDescription = document.querySelector('#description');
    const newItemImage = document.querySelector('#image');
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const image = newItemImage.value;
    const createdAt = new Date();
    itemsController.addItem(name, description, image, createdAt);
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemImage.value = '';
});