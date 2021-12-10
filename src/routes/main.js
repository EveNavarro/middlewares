let express = require('express');
let router = express.Router();
let controller = require('../controllers/mainController');
let UserAdminCheck = require('../middlewares/userAdmin');

router.get('/', controller.index);
router.get('/admin', UserAdminCheck ,controller.admin);




module.exports = router;