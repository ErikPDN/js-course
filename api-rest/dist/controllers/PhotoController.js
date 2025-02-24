"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);

const upload = _multer2.default.call(void 0, _multer4.default).single('photo');

class PhotoController {
  async index(req, res) {
    res.json({ message: 'Index' });
  }

  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }

      if (!req.file) {
        return res.status(400).json({
          errors: ['File not provided or invalid file type.'],
        });
      }

      const { originalname, filename } = req.file;
      const { student_id } = req.body;
      try {
        const student = await _Student2.default.findByPk(student_id);

        if (!student) {
          return res.status(400).json({
            errors: ['Student not found'],
          });
        }

        const photo = await _Photo2.default.create({
          original_name: originalname,
          file_name: filename,
          student_id
        });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: _optionalChain([e, 'access', _ => _.errors, 'optionalAccess', _2 => _2.map, 'call', _3 => _3((err) => err.message)]) || 'Error saving photo',
        });
      }
    });
  }
}

exports. default = new PhotoController();
