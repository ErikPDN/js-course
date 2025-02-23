class PhotoController {
  async index(req, res) {
    res.json({ message: 'Index' });
  }

  async create(req, res) {
    res.json({ message: 'Create' });
  }
}

export default new PhotoController();
