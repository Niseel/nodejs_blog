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

    // [GET] /news/create
    create(req, res, next) {
        res.render('news/create')
    }

    // [POST] /news/store
    store(req, res, next) {
        const post = new Post(req.body);
        post.save()
            .then(() => res.redirect('/news'))
            .catch(next);
    }

    // [GET] /news/:id/edit
    edit(req, res, next) {
        Post.findById(req.params.id)
            .then(post => res.render('news/edit', {
                post: mongooseToObject(post),   
            }))
            .catch(next)    
    }

    // [PUT] /news/:id
    update(req, res, next) {
        Post.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/blog'))
            .catch(next)
    }

    // [DELETE] /news/:id
    remove(req, res, next) {
        Post.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new NewsController();
