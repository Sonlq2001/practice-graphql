const resolvers = {
	Query: {
		listSpice(parent, args, { methodsQuery }) {
			return methodsQuery.getSpices();
		},
		listDish(parent, args, { methodsQuery }) {
			return methodsQuery.getDishes();
		},
		listIngredient(parent, args, { methodsQuery }) {
			return methodsQuery.getIngredients();
		},
		detailDish(parent, args, { methodsQuery }) {
			return methodsQuery.getDish(args);
		},
	},

	Dish: {
		ingredients(parent, args, { methodsQuery }) {
			return methodsQuery.getIngredients(parent.ingredientId);
		},
		spices(parent, args, { methodsQuery }) {
			return methodsQuery.getSpices(parent.spiceId);
		},
	},

	Mutation: {
		addSpice(parent, args, { methodsQuery }) {
			return methodsQuery.postSpice(args);
		},
		addIngredient(parent, args, { methodsQuery }) {
			return methodsQuery.postIngredient(args);
		},
		addDish(parent, args, { methodsQuery }) {
			return methodsQuery.postDish(args);
		},
		removeDish(parent, args, { methodsQuery }) {
			return methodsQuery.deleteDish(args);
		},
		updateDish(parent, args, { methodsQuery }) {
			return methodsQuery.patchDish(args);
		},
	},
};

module.exports = resolvers;
