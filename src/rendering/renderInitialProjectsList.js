export const renderInitialProjectsList = () => {
    const container = document.querySelector('.container');
    const projectsList = document.createElement('ul');
    projectsList.classList.add('projects-list');
    const title = document.createElement('p');
    title.textContent = 'PROJECTS COLLECTION'
    projectsList.appendChild(title);
    container.appendChild(projectsList);

    const buttonsWrapper = document.querySelector('.buttons');
    const button = document.createElement('button');
    button.classList.add('add-new-project');
    button.textContent = 'ADD NEW PROJECT';
    buttonsWrapper.appendChild(button);
}