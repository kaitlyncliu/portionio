import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
	// name: { type: String, required: true },
	// address: { type: String, required: true },
	// relativePortionSize: { type: Number, required: true },
	// image: { type: String, required: true },
	// description: { type: String, required: false },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants');
export default Restaurant;

