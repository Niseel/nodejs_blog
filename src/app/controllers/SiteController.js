const Post = require('../models/Post')
const { mongoosesToObject } = require('../../util/mongoose')

class SitesController {
    // [GET] /news
    index(req, res, next) {
        res.render('home');

        // Promise
        // Post.find({})
        //     .then(posts => res.json(posts))
        //     .catch(next);
            // // shorthand
            // .catch(error => next(error));


        // Callback
        // Post.find({}, function (err, posts) {
        //     if(!err)  res.json(posts);
        //     else res.status(400).json({ error: 'message' });
        //   });
    }

    // [GET] /news/:slug
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SitesController();
