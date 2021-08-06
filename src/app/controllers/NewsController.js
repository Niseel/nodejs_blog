const Post = require('../models/Post')
const { mongoosesToObject, mongooseToObject } = require('../../util/mongoose')

class NewsController {
    // [GET] /news
    index(req, res, next) {
        Post.find({})
            .then(posts => res.render('news', {
                posts: mongoosesToObject(posts),
            }))
            .catch(next);
    }

    // [GET] /news/:slug
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug })
            .then(post => res.render('news/show', {
                post: mongooseToObject(post),   
            }))
            .catch(next)
    }
}

module.exports = new NewsController();
