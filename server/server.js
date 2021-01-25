const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const express = require('express');

const authRoutes = require('./routes/auth.routes');
const serverConfig = require('./config/server.config');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use(authRoutes);

db.mongoose
  .connect(serverConfig.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Successfully connect to MongoDB');
  })
  .catch(err => {
    console.log('Connection error', err.message);
    process.exit();
  });

app.listen(serverConfig.port, () => console.log('Server is running at PORT 8080...'));
