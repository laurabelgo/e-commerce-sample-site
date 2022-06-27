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
}