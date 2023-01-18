import { createItem } from "../components-creation/createItem";
import { renderProjectsFromArray, clearProjectsList } from "./renderProjectsFromArray";
import { renderPriorityColor } from "./renderPriorityColor";
import ItemsCollection from "../components-definition/itemsCollection";

export const renderItemInProject = (projectsCollection, itemsCollection) => {
    const itemsList = document.querySelector('.items-list');
    const addNewItemButton = document.querySelector('.add-new-item');
    const span = document.getElementsByClassName("close")[0];
    const form = document.querySelector("form");
    const modal = document.getElementById("new-item-modal");
    const addItemBtnModal = document.querySelector('.add-new-item-modal-btn');
    let itemKeyId = undefined;

    const editItemBtnModal = document.createElement('button');
    editItemBtnModal.classList.add('edit-item-button');
    editItemBtnModal.textContent = 'Save changes';
    
    addNewItemButton.addEventListener('click', () => {
        modal.style.display = "block";
        form.reset();
        editItemBtnModal.setAttribute('style', 'display: none;');
        form.appendChild(editItemBtnModal);
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        addItemBtnModal.removeAttribute('style', 'display: none;');
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        addItemBtnModal.removeAttribute('style', 'display: none;');
        }
    }

    addItemBtnModal.addEventListener('click', () => {
        const brandNewItem = createItem();
        itemsCollection.addItem(brandNewItem);
        localStorage.setItem("itemsCollection", JSON.stringify(itemsCollection));
        form.reset();
        modal.removeAttribute("style", "display:block;");
        clearItemsList();
        renderItems(itemsCollection);
        clearProjectsList();
        renderProjectsFromArray(projectsCollection, itemsCollection);
    });

    const renderItems = (itemsCollection) => {
        if(itemsCollection.list.length > 0) {
            for(let i=0; i<itemsCollection.list.length; i++) {
                renderItem(itemsCollection, itemsCollection.list[i]);
            } 
        }
    };

    window.addEventListener("load", () => {
        const itemsCollection = new ItemsCollection(JSON.parse(localStorage.getItem("itemsCollection")).list);
        renderItems(itemsCollection);
      });

    const renderItem = (itemsCollection, item) => { 
        const newItemToDisplay = document.createElement('li');
        newItemToDisplay.classList.add('to-do-item');
        itemKeyId = itemsCollection.list.indexOf(item);
        newItemToDisplay.setAttribute('item-key-id', itemKeyId)

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('item-content-wrapper');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const project = document.createElement('p');
        title.textContent = `TITLE: ${item.title}`;
        description.textContent = `DESC: ${item.description}`;
        dueDate.textContent = `DUE DATE: ${item.dueDate}`;
        priority.textContent = `PRIORITY: ${item.priority}`;
        project.textContent = `PROJECT: ${item.project}`;
        renderPriorityColor(newItemToDisplay, item.priority);
        contentWrapper.appendChild(title);
        contentWrapper.appendChild(description);
        contentWrapper.appendChild(dueDate);
        contentWrapper.appendChild(priority);
        contentWrapper.appendChild(project);
        newItemToDisplay.appendChild(contentWrapper);

        const actionsWrapper = document.createElement('div');
        actionsWrapper.classList.add('actions-wrapper');

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-item');
        removeButton.textContent = 'Remove';
        actionsWrapper.appendChild(removeButton);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';
        actionsWrapper.appendChild(editButton);

        newItemToDisplay.appendChild(actionsWrapper);

        editButton.addEventListener('click', () => {
            form.appendChild(editItemBtnModal);
            form.reset();
            modal.style.display = "block";
            editItemBtnModal.removeAttribute('style', 'display: none;');
            addItemBtnModal.setAttribute('style', 'display: none;');

            const title = document.querySelector("input#title");
            const description = document.querySelector("input#description");
            const dueDate = document.querySelector("input#due-date");
            const priority = document.querySelector("select#priority");
            const project = document.querySelector("input#project");

            itemKeyId = itemsCollection.list.indexOf(item);
            title.value = itemsCollection.list[itemKeyId].title;
            description.value = itemsCollection.list[itemKeyId].description;
            dueDate.value = itemsCollection.list[itemKeyId].dueDate;
            priority.value = itemsCollection.list[itemKeyId].priority;
            project.value = itemsCollection.list[itemKeyId].project;
        });

        removeButton.addEventListener('click', () => {
            itemKeyId = itemsCollection.list.indexOf(item);
            itemsCollection.removeItem(itemKeyId);
            localStorage.setItem("itemsCollection", JSON.stringify(itemsCollection));
            itemsList.removeChild(newItemToDisplay);
            clearItemsList();
            renderItems(itemsCollection);
            clearProjectsList();
            renderProjectsFromArray(projectsCollection, itemsCollection);
        });

        itemsList.appendChild(newItemToDisplay);
    };

    editItemBtnModal.addEventListener('click', () => {
        const editedItem = createItem();
        itemsCollection.editItem(itemKeyId, editedItem);
        localStorage.setItem("itemsCollection", JSON.stringify(itemsCollection));
        modal.removeAttribute("style", "display:block;");
        editItemBtnModal.setAttribute('style', 'display: none;');
        addItemBtnModal.removeAttribute('style', 'display: none;');
        clearItemsList();
        renderItems(itemsCollection);
        clearProjectsList();
        renderProjectsFromArray(projectsCollection, itemsCollection);
    })

    const clearItemsList = () => {
        const allItems = document.querySelectorAll('.to-do-item');
        const itemsArray = Array.from(allItems);
        itemsArray.forEach(item => {
            itemsList.removeChild(item);
        })
    };
};
