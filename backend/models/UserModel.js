import mongoose from 'mongoose';

// Buat bentuk dari databasenya disini
const User = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
});

export default mongoose.model('Users', User);
