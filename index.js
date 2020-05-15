var express = require('express');
var app = express();
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
require('./models/userModel');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());

app.use(passport.session());

authRoutes(app);

app.get('/', (req, res) => {
	res.send('arrombado');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
