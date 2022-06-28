import ItemsController from './itemsController.js';

const itemsController = new ItemsController();
const listOfProducts = document.getElementById('list-products');

let createCard = (task) => {
      let newCard = document.createElement('div');
      newCard.className = 'card';
  
      let newImage = document.createElement('img');
      newImage.src = task.imageUrl;
      newImage.className = 'card-img-top';
  
      let newCardBody = document.createElement('div');
      newCardBody.className = 'card-body';

      let newName = document.createElement('h5');
      newName.innerText = task.name;
      newName.className = 'card-title';
  
      let newDescription = document.createElement('p');
      newDescription.className = 'card-text';
      newDescription.innerText = task.description;

      let newButton = document.createElement('button');
      newButton.className = 'btn btn-primary';
      newButton.innerText = "Buy Item";

      listOfProducts.appendChild(newCard);
      newCard.appendChild(newImage);
      newCard.appendChild(newCardBody);
      newCardBody.append(newName);
      newCardBody.append(newDescription);
      newCardBody.append(newButton);
}

function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'bracelets',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Charm bracelets made of silver.'},
        {'name':'leather shoes',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
          'description': 'Shoes made of leather.'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(let i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        createCard(item);
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();