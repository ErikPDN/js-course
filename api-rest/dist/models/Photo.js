"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _app = require('../config/app'); var _app2 = _interopRequireDefault(_app);

 class Photo extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Original name cannot be empty',
            },
          },
          field: 'original_name',
        },
        file_name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'File name cannot be empty',
            },
          },
          field: 'file_name',
        },
        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_app2.default.url}/images/${this.getDataValue('file_name')}`;
          }
        },
      },
      {
        sequelize,
        tableName: 'photos',
        underscored: true,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
} exports.default = Photo;
