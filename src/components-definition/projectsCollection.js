class ProjectsCollection {
    constructor (list = []) {
        this.list = list;
    }

    addProject(project) {
        this.list.push(project);
    }
}

export default ProjectsCollection;