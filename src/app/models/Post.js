const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, minLength: 1, maxLength: 255},
    content: { type: String, minLength: 1, maxLength: 600},
    image: { type: String, minLength: 1, maxLength: 255},
    category: { type: String, minLength: 1, maxLength: 100},
    author: { type: String, default: 'anonymous', minLength: 1, maxLength: 100},
    slug: { type: String, slug: "title", unique: true},
  }, 
  { 
    timestamps: true
  });

// add plugin options
mongoose.plugin(slug);
Post.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all',
});

// đối số đầu sẽ tự quy về chữ thường, dạng số nhiều khi lên db nếu chưa có collection đó
// đối số thứ 2 là schema - cái khung model mình vừa tạo
module.exports = mongoose.model('Post', Post);