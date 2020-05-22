var express = require('express');
var app = express();
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
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
passwordRoutes(app);

app.get('/hey', (req, res) => {
	res.send('arrombado');
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
  
	const path = require('path');
	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
	});
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT);
