class ItemsCollection {
    constructor (list=[]) {
        this.list = list;
    }

    addItem(item) {
        this.list.push(item);
    }

    editItem(index, item) {
        this.list[index] = item;
    }

    removeItem(itemIndex) {
        this.list.splice(itemIndex, 1);
    }
}

export default ItemsCollection;