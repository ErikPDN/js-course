"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _loginRequired2.default, _UserController2.default.index);
router.get('/:id', _loginRequired2.default, _UserController2.default.show);

router.post('/', _loginRequired2.default, _UserController2.default.create);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);
router.put('/', _loginRequired2.default, _UserController2.default.update);

exports. default = router;
