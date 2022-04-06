const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const api =
			"mongodb+srv://restaurant:restaurant@cluster0.qzrxu.mongodb.net/restaurant?retryWrites=true&w=majority";
		await mongoose.connect(api, {});

		console.log("Connect db successfully");
	} catch (error) {
		console.log("Connect db failed");
	}
};

module.exports = { connectDB };
