"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class UserController {
  async create(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: { exclude: ['password_hash'] } });
      return res.json(users);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await _User2.default.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: 'User not found' });
      }

      return res.json(user);
    } catch (e) {
      res.status(400).json({ errors: _optionalChain([e, 'access', _ => _.errors, 'optionalAccess', _2 => _2.map, 'call', _3 => _3((err) => err.message)]) || "Error seaching user" });
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.destroy();
      return res.status(200).json({ message: 'User deleted' });
    } catch (e) {
      res.status(400).json({ errors: _optionalChain([e, 'access', _4 => _4.errors, 'optionalAccess', _5 => _5.map, 'call', _6 => _6((err) => err.message)]) || "Error deleting user" });
    }
  }

  async update(req, res) {
    try {
      const { password, ...updatedData } = req.body;

      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (password) {
        if (password.length < 6 || password.length > 50) {
          return res.status(400).json({ error: "Password must be between 6 and 50 characters" });
        }
        updatedData.password_hash = await _bcryptjs2.default.hash(password, 8);
      }

      await user.update(updatedData);

      const { id, email } = user;
      return res.json({ id, email });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: _optionalChain([e, 'access', _7 => _7.errors, 'optionalAccess', _8 => _8.map, 'call', _9 => _9((err) => err.message)]) || "Error updating user" });
    }
  }
}

exports. default = new UserController();
