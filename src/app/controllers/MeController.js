const Post = require('../models/Post')
const { mongoosesToObject, mongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/blog
    storedBlog(req, res, next) {
        Promise.all([Post.find({}), Post.countDocumentsDeleted()])
            .then(([posts, countDeleted]) => res.render('me/stored-blog', {
                countDeleted,
                posts: mongoosesToObject(posts), 
            }))
            .catch(next);

        // Post.countDocumentsDeleted()
        //     .then((amount) => {
        //         console.log('Soluong: ', amount);
        //     })
        //     .catch(() =>{});
            
        // Post.find({})
        //     .then(posts => res.render('me/stored-blog', {
        //         posts: mongoosesToObject(posts),
        //     }))
        //     .catch(next);
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
