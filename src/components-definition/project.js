class Project {
    constructor(name) {
        this.name = name;
        this.list = [];
    }

    addItemToProject(item) {
        this.list.push(item);
    }
}

export default Project;