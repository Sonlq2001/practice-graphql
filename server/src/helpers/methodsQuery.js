const Spice = require("./../models/spiceModel");
const Ingredient = require("./../models/ingredientModel");
const Dish = require("./../models/dishModel");

const getSpices = async (params) => {
	try {
		const listSpice = await Spice.find(params ? { _id: { $in: params } } : {});
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

const getIngredients = async (params) => {
	try {
		const listIngredient = await Ingredient.find(
			params ? { _id: { $in: params } } : {}
		);
		return listIngredient;
	} catch (error) {
		return error.message;
	}
};

const postDish = async (data) => {
	try {
		const newDish = new Dish(data);
		return await newDish.save();
	} catch (error) {
		return error.message;
	}
};

const getDishes = async () => {
	try {
		const listDish = await Dish.find();
		return listDish;
	} catch (error) {
		return error.message;
	}
};

module.exports = {
	getSpices,
	postSpice,
	postIngredient,
	getIngredients,
	postDish,
	getDishes,
};
