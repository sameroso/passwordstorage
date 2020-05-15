var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
require('./models/userModel');
require('./services/passport');

mongoose.connect(
	'mongodb+srv://samer:eVaLsaIBIerGgOoM@cluster0-hdaqh.mongodb.net/test?retryWrites=true&w=majority'
);

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: ['keys.cookieKey'],
	})
);

app.use(passport.initialize());

app.use(passport.session());

authRoutes(app);

app.get('/', (req, res) => {
	res.send('arrombado');
});

app.listen(5000, function () {
	console.log('Rodando na porta 5000');
});
