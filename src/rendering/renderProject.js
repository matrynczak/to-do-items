import { createNewProject } from "../components-creation/createNewProject";
import { renderProjectsFromArray, clearProjectsList } from "./renderProjectsFromArray";

export const renderProject = (projectsCollection, itemsCollection) => {
    const button = document.querySelector('.add-new-project');
    button.addEventListener('click', () => {
        const brandNewProject = createNewProject();
        projectsCollection.addProject({name: brandNewProject.name})
        localStorage.setItem("projectsCollection", JSON.stringify(projectsCollection));
        clearProjectsList();
        renderProjectsFromArray(projectsCollection, itemsCollection)
    })
    
}

