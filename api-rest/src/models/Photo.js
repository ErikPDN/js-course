import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app';

export default class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Original name cannot be empty',
            },
          },
          field: 'original_name',
        },
        file_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'File name cannot be empty',
            },
          },
          field: 'file_name',
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('file_name')}`;
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
}
