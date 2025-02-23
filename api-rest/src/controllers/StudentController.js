import Student from "../models/Student";

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
        attributes: { exclude: ['created_at', 'updated_at'] }
      });

      return res.json(students);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
