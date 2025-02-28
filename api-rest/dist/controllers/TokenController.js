"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ['Invalid credentials'] });
    }

    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['User not found'] });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ errors: ['Invalid password'] });
    }

    const token = _jsonwebtoken2.default.sign({ id: user.id, email: user.email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRE }
    );

    return res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  }
}

exports. default = new TokenController();
