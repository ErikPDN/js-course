"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class StudentController {
  async create(req, res) {
    try {
      const student = await _Student2.default.create(req.body);
      const { id, name, email, years_old, height, weight } = student;
      return res.json({ id, name, email, years_old, height, weight });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const students = await _Student2.default.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['id', 'original_name', 'file_name', 'url'],
        }
      });

      return res.json(students);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const student = await _Student2.default.findByPk(id, {
        attributes: { exclude: ['created_at', 'updated_at'] },
        order: [[_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['id', 'url', 'original_name', 'file_name'],
        }
      });

      if (!student) {
        return res.status(400).json({ errors: 'Student not found' });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: _optionalChain([e, 'access', _ => _.errors, 'optionalAccess', _2 => _2.map, 'call', _3 => _3((err) => err.message)]) || 'Error searching student',
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const student = await _Student2.default.findByPk(id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      await student.destroy();
      return res.status(200).json({ message: 'Student deleted' });
    } catch (e) {
      return res.status(400).json({
        errors: _optionalChain([e, 'access', _4 => _4.errors, 'optionalAccess', _5 => _5.map, 'call', _6 => _6((err) => err.message)]) || 'Error deleting student',
      });
    }
  }

  async update(req, res) {
    try {
      const student = await _Student2.default.findByPk(req.params.id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      const updatedStudent = await student.update(req.body);

      const { id, name, email, years_old, height, weight } = updatedStudent;
      return res.json({ id, name, email, years_old, height, weight });
    } catch (e) {
      return res.status(400).json({
        errors: _optionalChain([e, 'access', _7 => _7.errors, 'optionalAccess', _8 => _8.map, 'call', _9 => _9((err) => err.message)]) || 'Error updating student',
      });
    }
  }
}

exports. default = new StudentController();
