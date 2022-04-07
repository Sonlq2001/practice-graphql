const resolvers = {
	Query: {
		listSpice(parent, args, { methodsQuery }) {
			return methodsQuery.getSpices();
		},
		listDish(parent, args, { methodsQuery }) {
			return methodsQuery.getDishes();
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
	},
};

module.exports = resolvers;
