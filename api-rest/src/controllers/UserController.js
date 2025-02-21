import User from '../models/User';
import bcrypt from 'bcryptjs';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: { exclude: ['password_hash'] } });
      return res.json(users);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: 'User not found' });
      }

      return res.json(user);
    } catch (e) {
      res.status(400).json({ errors: e.errors?.map((err) => err.message) || "Error seaching user" });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.destroy();
      return res.status(200).json({ message: 'User deleted' });
    } catch (e) {
      res.status(400).json({ errors: e.errors?.map((err) => err.message) || "Error deleting user" });
    }
  }

  async update(req, res) {
    try {
      const { password, ...updatedData } = req.body;

      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (password) {
        if (password.length < 6 || password.length > 50) {
          return res.status(400).json({ error: "Password must be between 6 and 50 characters" });
        }
        updatedData.password_hash = await bcrypt.hash(password, 8);
      }

      await user.update(updatedData);

      const { id, email } = user;
      return res.json({ id, email });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors?.map((err) => err.message) || "Error updating user" });
    }
  }
}

export default new UserController();
