class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }
    
    addItem(name, description, imageUrl, createdAt) {
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl,
            createdAt: createdAt
        };
        this.items.push(item);
        if (localStorage.getItem("items")) {
            const items = JSON.parse(localStorage.getItem("items"));
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));
        }
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