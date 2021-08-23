const Post = require('../models/Post')
const { mongoosesToObject, mongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/blog
    storedBlog(req, res, next) {
        Post.find({})
            .then(posts => res.render('me/stored-blog', {
                posts: mongoosesToObject(posts),
            }))
            .catch(next);
    }

    // [GET] /me/trash/blog
    trashBlog(req, res, next){
        Post.findDeleted({})
        .then(posts => res.render('me/trash-blog', {
            posts: mongoosesToObject(posts),
        }))
        .catch(next);
    }
}

module.exports = new MeController();
