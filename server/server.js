const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const express = require('express');

const authRoutes = require('./routes/auth.routes');
const serverConfig = require('./config/server.config');
const db = require('./models');
const Role = db.role;

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
    init();
  })
  .catch(err => {
    console.log('Connection error', err.message);
    process.exit();
  });

app.listen(serverConfig.port, () => console.log('Server is running at PORT 8080...'));

// Create rows in roles collection
function init() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user'
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log(`added 'user' to roles collection`);
      });

      new Role({
        name: 'manager'
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log(`added 'manager' to roles collection`);
      });

      new Role({
        name: 'admin'
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log(`added 'admin' to roles collection`);
      });
    }
  });
}