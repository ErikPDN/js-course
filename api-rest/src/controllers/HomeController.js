class HomeController {
  index(req, res) {
    res.json({
      "test": true
    });
  }
}

export default new HomeController();
