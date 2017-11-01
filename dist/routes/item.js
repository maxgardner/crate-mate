'use strict';

var _routeHelpers = require('../utils/route-helpers');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (router, db) {
  var route = 'item',
      id = 'itemId';

  router.get((0, _routeHelpers.setApiPath)(route, id), function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
      var item, items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!req.params.itemId) {
                _context.next = 7;
                break;
              }

              _context.next = 3;
              return db.Item.find({
                where: {
                  id: req.params.itemId
                }
              });

            case 3:
              item = _context.sent;

              res.json(item);
              _context.next = 11;
              break;

            case 7:
              _context.next = 9;
              return db.Item.findAll({});

            case 9:
              items = _context.sent;

              res.json(items);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  router.post((0, _routeHelpers.setApiPath)(route), function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
      var newItem;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newItem = db.Item.findOrCreate({
                where: {
                  name: req.body.name
                }
              });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  router.put((0, _routeHelpers.setApiPath)(route, id), function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
      var item;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return db.Item.update(req.body, {
                where: {
                  id: req.body.id
                }
              });

            case 2:
              item = _context3.sent;

              res.json({
                item: item,
                updated: true
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  router.delete((0, _routeHelpers.setApiPath)(route, id, false), function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(req, res) {
      var isDeleted;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return db.Item.destroy({
                where: {
                  id: req.params.id
                }
              });

            case 2:
              isDeleted = _context4.sent;

              res.json({
                item: isDeleted,
                deleted: true
              });

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  return router;
};