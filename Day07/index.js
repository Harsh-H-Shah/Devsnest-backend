const express = require('express');
const app = express();

const port = 5050;

app.get('/', (req, res) => {
	res.send('Hello world');
});

// to send data as json
app.get('/json', (req, res) => {
	res.json({
		name: 'Paul',
		email: 'Paul@gmail.com',
	});
});

app.get('/something', (req, res) => {
	res.status(200).send('Have a break have a 200');
});

// receiving query paramenets
app.get('/query', (req, res) => {
	console.log(req.query);
	res.status(200).send(req.query);
});

//params
app.get('/team/:code', (req, res) => {
	const { code } = req.params;
	if (code == 1) {
		res.send('Hello my friend');
		return;
	}

	res.send('Incorrect CODE!');
});

app.listen(port, () => {
	console.log(`server is up on http://localhot:${port}`);
});