import { Router } from 'express';

module.exports = (app, db) => {
  let router = Router();
  const apiRoutes = [
    require('./item')
  ];

  apiRoutes.forEach((route) => {
    route(router, db);
  });

  app.use(router);
  return app;
}
