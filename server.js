const express = require('express');
const authRoutes = require('./routes/auth');
const passportConfig = require('./config/passport-config');

const app = express();

// Set up the ejs view engine - middleware
app.set('view engine', 'ejs');

// Set up routes - middleware
// We are going to put '/auth' in front of the routes that were set up in authRoutes.
app.use('/auth', authRoutes);

// Create home route
app.get('/', (req, res) => {
  res.render('home');
});

PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server started on port ${PORT}`));
