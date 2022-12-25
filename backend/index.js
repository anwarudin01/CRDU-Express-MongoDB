import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute';

// 1. Buat koneksi ke database mongodb
const app = express();
mongoose.connect('mongodb://anwarudin:closeup123@localhost:27017/eduwork-crud?authSource=admin');
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// 2. Buat server databasenya
app.listen(5000, () => console.log('Server up and running'));
