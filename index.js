const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./routes/projects-route');

const server = express();
const port = process.env.PORT || 6969;
// 3rd party middlwares
server.use(helmet());
server.use(express.json());

// CUSTOM ROUTES
server.get('/', (req, res) => {
	res.json({
		msg: 'Welcome to da Projects AKA Node Sprint 2!',
	});
});

server.use('/api', projectRouter);

// ERROR HANDLING
server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Opps, something went wrong',
	});
});

// Server Listening
server.listen(port, () => {
	console.log(`### Server running on: http://localhost:${port}`);
});
