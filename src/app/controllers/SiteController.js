const Post = require('../models/Post')

class SitesController {
    // [GET] /news
    index(req, res, next) {

        Post.find({}, function (err, posts) {
            if(!err)  res.json(posts);
            else res.status(400).json({ error: 'message' });
          });
    }

    // [GET] /news/:slug
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SitesController();
