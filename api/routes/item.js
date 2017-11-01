import { setApiPath as setPath } from '../utils/route-helpers';

module.exports = (router, db) => {
  const route = 'item',
        id = 'itemId';

  router.get(setPath(route, id), async (req, res) => {
    if (req.params.itemId) {
      const item = await db.Item.find({
        where: {
          id: req.params.itemId
        }
      });
      res.json(item);
    } else {
      const items = await db.Item.findAll({});
      res.json(items);
    }
  });

  router.post(setPath(route), async (req, res) => {
    const newItem = db.Item.findOrCreate({
      where: {
        name: req.body.name
      }
    });
  });

  router.put(setPath(route, id), async (req, res) => {
    const item = await db.Item.update(req.body,
      {
        where: {
          id: req.body.id
        }
      });
    res.json({
      item,
      updated: true
    });
  });

  router.delete(setPath(route, id, false), async (req, res) => {
    const isDeleted = await db.Item.destroy(
      {
        where: {
          id: req.params.id
        }
      });
    res.json({
      item: isDeleted,
      deleted: true
    });
  });

  return router;
};
