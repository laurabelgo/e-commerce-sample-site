export class ItemsController {
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