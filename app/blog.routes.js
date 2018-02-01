let router = require('express').Router();

let blogController = require('./blog.controller');

router.get('/', blogController.readAll);
router.post('/', blogController.create);
router.get('/:blogId', blogController.read);
router.put('/:blogId', blogController.update);
router.delete('/:blogId', blogController.delete);

module.exports = router;
