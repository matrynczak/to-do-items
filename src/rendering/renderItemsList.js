
export const renderItemsList = () => {
    const container = document.querySelector('.container');
    const itemsCollection = document.createElement('ul');
    itemsCollection.classList.add('items-list');
    const title = document.createElement('p');
    title.textContent = 'ITEMS COLLECTION';
    itemsCollection.appendChild(title);
    container.appendChild(itemsCollection);

    const buttonsWrapper = document.querySelector('.buttons');
    const button = document.createElement('button');
    button.classList.add('add-new-item');
    button.textContent = 'ADD NEW ITEM';
    buttonsWrapper.appendChild(button);
}

