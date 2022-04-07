const mongoose = require("mongoose");

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		ingredientId: {
			type: Array,
			required: true,
			default: [],
		},
		spiceId: {
			type: Array,
			required: true,
			default: [],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("dishes", schema);
