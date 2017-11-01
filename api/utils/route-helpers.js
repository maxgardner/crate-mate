export const setApiPath = (routePath, param = '', optional = true) => {
  if (optional === false) {
    return `/api/${routePath}/${param}`;
  }
  return `/api/${routePath}/:${param}`;
};

export const authChecker = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect('/login');
};

// From https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
export const asyncAll = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
  .catch(next);
};

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.json({
    error: err
  });
  return next(err);
};
