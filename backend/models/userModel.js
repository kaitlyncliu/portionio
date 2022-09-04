import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	BMI: { type: Number, required: false },
	age: { type: Number, required: false },
	activityLevel: { type: Number, required: false },
});

const User = mongoose.model('User', userSchema);
export default User;
