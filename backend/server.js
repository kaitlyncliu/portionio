import express, { application } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import restaurantRouter from './routes/restaurantRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();

const mongoDB = 'mongodb+srv://dangelic:mongodb@cluster0.avdoc6k.mongodb.net/test';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongoose
// 	.connect('mongodb+srv://dangelic:mongodb@cluster0.avdoc6k.mongodb.net/test')
// 	.then(() => {
// 		console.log('connected to db');
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/restaurants', restaurantRouter);
app.use('/api/users', userRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`serve at http://localhost:${port}`);
});
