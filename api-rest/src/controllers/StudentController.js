import Student from "../models/Student";
import Photo from "../models/Photo";

class StudentController {
  async create(req, res) {
    try {
      const student = await Student.create(req.body);
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
      const students = await Student.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['id', 'original_name', 'file_name'],
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
      const student = await Student.findByPk(id, {
        attributes: { exclude: ['created_at', 'updated_at'] },
        order: [[Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['id', 'original_name', 'file_name'],
        }
      });

      if (!student) {
        return res.status(400).json({ errors: 'Student not found' });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || 'Error searching student',
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      await student.destroy();
      return res.status(200).json({ message: 'Student deleted' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || 'Error deleting student',
      });
    }
  }

  async update(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      const updatedStudent = await student.update(req.body);

      const { id, name, email, years_old, height, weight } = updatedStudent;
      return res.json({ id, name, email, years_old, height, weight });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || 'Error updating student',
      });
    }
  }
}

export default new StudentController();
