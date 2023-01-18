import { renderItemInProject } from "./rendering/renderItemInProject";
import { renderItemsList } from './rendering/renderItemsList';
import { renderProjectsFromArray } from "./rendering/renderProjectsFromArray";
import { renderProject } from "./rendering/renderProject";
import ProjectsCollection from "./components-definition/projectsCollection";
import ItemsCollection from "./components-definition/itemsCollection";
import { renderInitialProjectsList } from "./rendering/renderInitialProjectsList";

const createPage = () => {
    let projectsCollection = new ProjectsCollection();
    let itemsCollection = new ItemsCollection();
    
    if (!localStorage.getItem('projectsCollection')) {
        localStorage.setItem("projectsCollection", JSON.stringify(projectsCollection));
      } else {
        projectsCollection = new ProjectsCollection(JSON.parse(localStorage.getItem("projectsCollection")).list);
    }

    if (!localStorage.getItem('itemsCollection')) {
        localStorage.setItem("itemsCollection", JSON.stringify(itemsCollection));
      } else {
        itemsCollection = new ItemsCollection(JSON.parse(localStorage.getItem("itemsCollection")).list);
    }

    window.addEventListener("load", () => {
    itemsCollection = new ItemsCollection( JSON.parse(localStorage.getItem("itemsCollection")).list );
    localStorage.setItem("itemsCollection", JSON.stringify(itemsCollection));

    projectsCollection = new ProjectsCollection( JSON.parse(localStorage.getItem("projectsCollection")).list );
    localStorage.setItem("projectsCollection", JSON.stringify(projectsCollection));
    });  

    renderInitialProjectsList();
    renderItemsList();
    renderProjectsFromArray(projectsCollection, itemsCollection);
    renderItemInProject(projectsCollection, itemsCollection);
    renderProject(projectsCollection, itemsCollection);
};

createPage();