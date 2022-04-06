const resolvers = {
	Query: {
		listSpice(parent, args, { methodsQuery }) {
			return methodsQuery.getSpices();
		},
	},

	Mutation: {
		addSpice(parent, args, { methodsQuery }) {
			return methodsQuery.postSpice(args);
		},
		addIngredient(parent, args, { methodsQuery }) {
			return methodsQuery.postIngredient(args);
		},
	},
};

module.exports = resolvers;
