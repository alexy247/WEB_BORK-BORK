const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    breed: {
      type: String,
      },
    img: {
      type: String
    },
    des: {
        type: String,
        },
    dif: {
        type: String,
      }
  }
  
);

schema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Post', schema);