const express = require('express');
const projectDB = require('../models/projects-model');

const router = express.Router();

// routes
router.post('/resources', validBodyForResources(), async (req, res, next) => {
	try {
		const resource = req.reSource;
		const resp = await projectDB.addResources(resource);

		res.status(201).json({
			resource_id: resp[0],
		});
	} catch (e) {
		next(e);
	}
});

router.get('/project/:id/resources', async (req, res, next) => {
	try {
		const resources = await projectDB.getListOfResources(req.params.id);

		res.status(200).json(resources);
	} catch (e) {
		next(e);
	}
});

router.post('/projects', validBodyForProjects(), async (req, res, next) => {
	try {
		const project = req.reSource;
		const resp = await projectDB.addResources(resource);

		res.status(201).json({
			resource_id: resp[0],
		});
	} catch (e) {
		next(e);
	}
});

function validBodyForResources() {
	return (req, res, next) => {
		if (!req.body) {
			return res.status(400).json({
				msg: 'missing content',
			});
		} else if (!req.body.name) {
			return res.status(400).json({
				msg: 'missing required field: name',
			});
		} else {
			req.reSource = {
				name: req.body.name,
				description:
					req.body.description || 'No resource description provided.',
			};
			next();
		}
	};
}
function validBodyForProjects() {
	return (req, res, next) => {
		if (!req.body) {
			return res.status(400).json({
				msg: 'missing content',
			});
		} else if (!req.body.name) {
			return res.status(400).json({
				msg: 'missing required field: name',
			});
		} else {
			req.project = {
				name: req.body.name,
				description:
					req.body.description || 'No project description provided.',
				projectCompleted: false,
			};
			next();
		}
	};
}

// exports
module.exports = router;
