require('babel-polyfill');
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import path from 'path';
import { authChecker, asyncAll, errorHandler } from './dist/utils/route-helpers';
// import authCheckMiddleware from 'config/auth';
import db from './dist/models';

const port = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.static(path.join(__dirname, 'build/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(asyncAll);
// app.use(authChecker);
app.use(errorHandler);

// Import routes
require('./dist/routes/index')(app, db);
``
// Set up database connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });``

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on ${port}`);
});
