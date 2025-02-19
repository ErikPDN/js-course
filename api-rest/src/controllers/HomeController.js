import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: "Erik",
      email: "erik@gmail.com",
      years_old: 25,
      height: 1.70,
      weight: 72.5,
    });
    res.send(newStudent);
  }
}

export default new HomeController();
