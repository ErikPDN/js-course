import multer from 'multer';
import multerConfig from '../config/multer';

import Photo from '../models/Photo';
import Student from '../models/Student';

const upload = multer(multerConfig).single('photo');

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
        const student = await Student.findByPk(student_id);

        if (!student) {
          return res.status(400).json({
            errors: ['Student not found'],
          });
        }

        const photo = await Photo.create({
          original_name: originalname,
          file_name: filename,
          student_id
        });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: e.errors?.map((err) => err.message) || 'Error saving photo',
        });
      }
    });
  }
}

export default new PhotoController();
