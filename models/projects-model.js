const db = require('../data/config');
const { select } = require('../data/config');

// * adding resources
function addResources(resourceOBJ) {
	return db('resources').insert(resourceOBJ);
}
// * retrieving a list of resources
function getListOfResources(projectID) {
	return db('project_resources as PR')
		.join('resources as R', 'R.id', 'PR.resource_id')
		.join('projects as P', 'P.id', 'PR.project_id')
		.where('P.id', projectID)
		.select(
			'P.name AS project_name',
			'R.id AS resource_id',
			'R.name AS resource_name',
			'R.description AS resource_description'
		);
}
// TODO adding projects
function addProject(projectOBJ) {
	return db('projects').insert(projectOBJ);
}
// TODO retrieving a list of projects
function getAllProjects() {
	return db('projects');
}
// TODO adding tasks
function addTasks(taskOBJ) {
	return db('tasks').insert(taskOBJ);
}
// TODO retrieving a list of tasks
// TODO ^^^ should include projecet name & description

module.exports = {
	addResources,
	getListOfResources,
	addProject,
	getAllProjects,
	addTasks,
};
