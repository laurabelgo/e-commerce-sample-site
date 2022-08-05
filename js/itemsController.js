class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }
    
    addItem(name, description, imageUrl) {
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };
        this.items.push(item);
        if (localStorage.getItem("items")) {
            const items = JSON.parse(localStorage.getItem("items"));
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));
            //this.save(item.name, item.description, item.imageUrl);
        }
    }

    save(name, description, imageUrl){
        const data = {name,  description, imageUrl};
        fetch('http://localhost:8080/item', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    update({name, description, imageUrl}){
        const data = { name,  description, imageUrl };
        fetch('http://localhost:8080/item', {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    async delete(itemId){
        await fetch(`http://localhost:8080/item/${itemId}`, { 
        method: 'DELETE' })
    }

    findById(itemId){
        fetch(`http://localhost:8080/item/${itemId}`)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    removeItem(itemId) {
        const itemToBeRemoved = this.items[itemId];
        if (itemToBeRemoved === null) {
            return;
        }
        localStorage.removeItem("items", JSON.stringify(itemToBeRemoved));
        this.removeItem(itemId);
    }

    updateItem(id) {
        //TODO
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (let i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
}

export default ItemsController;