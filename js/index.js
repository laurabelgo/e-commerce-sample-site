import {ItemsController} from './itemsController.js';

const itemsController = new ItemsController(0);
const newItem = document.querySelector('#add-item');

/*function addItemCard(item) {
    const itemHTML = '<div class="card">\n' +
          '<img src="'+currentItem.imageUrl+'" class="card-img-top" alt="image">\n' +
          '<div class="card-body">\n' +
            '<h5 class="card-title">'+currentItem.name+'</h5>\n' +
            '<p class="card-text">'+currentItem.description+'</p>\n' +
            '<button type="submit" class="btn btn-primary">Buy Item</button>\n' +
          '</div>\n' + '</div>';
    const itemsContainer = document.getElementById('#list-products');
    itemsContainer.innerHTML += itemHTML;
}*/

function createElement( str ) {
    var frag = document.createDocumentFragment();

    var elem = document.createElement('div');
    elem.innerHTML = str;

    while (elem.childNodes[0]) {
        frag.appendChild(elem.childNodes[0]);
    }
    return frag;
}

function addItemCard(item) {
    const itemHTML = '<div class="card">\n' +
                     '<img src="' + item.imageUrl+ '" class="card-img-top" alt="Image of jewlery">\n' +
                     '<div class="card-body">\n' +
                     '<h5 class="card-title">' + item.name + '</h5>\n' +
                     '<p class="card-text">'+ item.description +'</p>\n' +
                     '<button type="submit" class="btn btn-primary">Buy Item</button>\n' +
                     '</div>\n' +
                     '</div>';
    let newHTML = createElement(itemHTML);
    const itemsContainer = document.getElementById('list-products');
    itemsContainer.innerHTML += itemHTML;
}
  
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
