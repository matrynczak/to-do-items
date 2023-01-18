import Item from "../components-definition/item";

export const createItem = () => {
    const title = document.querySelector("input#title");
    const description = document.querySelector("input#description");
    const dueDate = document.querySelector("input#due-date");
    const priority = document.querySelector("select#priority");
    const project = document.querySelector("input#project");
    const newItem = new Item(title.value, description.value, dueDate.value, priority.value, project.value);
    return newItem;
}
