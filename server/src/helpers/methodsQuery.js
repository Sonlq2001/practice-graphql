const Spice = require("./../models/spiceModel");
const Ingredient = require("./../models/ingredientModel");

const getSpices = async () => {
	try {
		const listSpice = await Spice.find();
		return listSpice;
	} catch (error) {
		return error.message;
	}
};

const postSpice = async (data) => {
	try {
		const newSpice = new Spice(data);
		return await newSpice.save();
	} catch (error) {
		return error.message;
	}
};

const postIngredient = async (data) => {
	try {
		const newIngredient = new Ingredient(data);
		return await newIngredient.save();
	} catch (error) {
		return error.message;
	}
};

module.exports = { getSpices, postSpice, postIngredient };
