export const renderPriorityColor = (item, priority) => {
    if(priority === 'low') item.setAttribute('style', 'background-color: #07e707');
    if(priority === 'medium') item.setAttribute('style', 'background-color: #ffe81d');
    if(priority === 'high') item.setAttribute('style', 'background-color: #fb9500');
    if(priority === 'critical') item.setAttribute('style', 'background-color: #ff1100');
}