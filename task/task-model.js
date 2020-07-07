const db = require('../connection');

module.exports = {
    getTasks,
    post,
}

function getTasks() {

    return db('tasks')
    .select('projects.name as Project Name', 'projects.description as Project Description', 'tasks.description as Task Description', 'tasks.notes as Task Notes', 'tasks.completed as Is Task Completed')
    .join('projects', 'projects.id', 'tasks.project_id')

}

function post(newTask) {
    return db('tasks').insert(newTask);

}