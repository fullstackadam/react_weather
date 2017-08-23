import express from 'express';

const app = express();

app.use(express.static('public'));

app.listen(3000, function(err) {
	if (err) throw err;

	else console.log('Up and running on port 3000');
});