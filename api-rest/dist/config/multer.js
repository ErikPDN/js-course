"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const ramdom = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => { cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')) },
    filename: (req, file, cb) => { cb(null, `${Date.now()}_${ramdom()}${_path.extname.call(void 0, file.originalname)}`) },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
