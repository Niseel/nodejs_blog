const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String, minLength: 1, maxLength: 255},
  content: { type: String, minLength: 1, maxLength: 600},
  image: { type: String, minLength: 1, maxLength: 255},
  category: { type: String, minLength: 1, maxLength: 100},
  author: { type: String, default: 'anonymous', minLength: 1, maxLength: 100},
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});


// đối số đầu sẽ tự quy về chữ thường, dạng số nhiều khi lên db nếu chưa có collection đó
// đối số thứ 2 là schema - cái khung model mình vừa tạo
module.exports = mongoose.model('Post', Post);