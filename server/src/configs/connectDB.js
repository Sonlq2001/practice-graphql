const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const api = process.env.DATABASE_URL;
		await mongoose.connect(api, {});

		console.log("Connect db successfully");
	} catch (error) {
		console.log("Connect db failed");
	}
};

module.exports = { connectDB };
