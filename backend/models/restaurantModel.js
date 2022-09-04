import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	relativePortionSize: { type: Number, required: true },
	image: { type: String, required: true },
	description: { type: String, required: false },
});

const Restaurant = new mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
