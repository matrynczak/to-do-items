import { renderPriorityColor } from "./renderPriorityColor";

const renderProjectsFromArray = (projectsCollection, itemsCollection) => {
    const projectsList = document.querySelector('.projects-list');
    if(projectsCollection.list.length > 0) {
        projectsCollection.list.forEach(project => {
            const newProjectToDisplay = document.createElement('li');
            newProjectToDisplay.classList.add('project-item');
            newProjectToDisplay.textContent = project.name;
            const assignedItemsList = document.createElement('ul');
            assignedItemsList.textContent = 'Tasks assigned: '
            newProjectToDisplay.appendChild(assignedItemsList);

            if(itemsCollection) {
                    for(let i=0; i<itemsCollection.list.length; i++){
                        if(itemsCollection.list[i].project === project.name) {
                            
                            const assignedItem = document.createElement('li');
                            assignedItem.classList.add('assigned-to-project-item');
                            const title = document.createElement('p');
                            title.classList.add('item-detail-title');
                            title.textContent = `Title: ${itemsCollection.list[i].title}`;
                            const dueDate = document.createElement('p');
                            dueDate.classList.add('item-detail-date');
                            dueDate.textContent = `Due date: ${itemsCollection.list[i].dueDate}`;
                            renderPriorityColor(assignedItem, itemsCollection.list[i].priority)
                            assignedItem.appendChild(title);
                            assignedItem.appendChild(dueDate);
                            assignedItemsList.appendChild(assignedItem);
                    }
                }
            }
            projectsList.appendChild(newProjectToDisplay);
        });   
    }
};

const clearProjectsList = () => {
    const projectsList = document.querySelector('.projects-list');
    const projects = document.querySelectorAll('.projects-list>li');
    for(let i=0; i<projects.length; i++) {
        projectsList.removeChild(projects[i]);
    }
};

export { renderProjectsFromArray, clearProjectsList };