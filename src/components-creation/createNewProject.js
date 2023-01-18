import Project from "../components-definition/project";

export const createNewProject = () => {
    const name = prompt("NAME: ");
    
    const newProject = new Project(name);
    return newProject;
}
