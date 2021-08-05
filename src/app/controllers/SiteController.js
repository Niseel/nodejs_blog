class SitesController {
  // [GET] /news
  index(req, res, next) {
    res.render("home");
  }

  // [GET] /news/:slug
  search(req, res, next) {
    res.render("search");
  }
}

module.exports = new SitesController();
