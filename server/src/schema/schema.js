const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Dish {
		_id: ID!
		name: String!
		ingredients: [Ingredient!]
		spices: [Spice!]
	}

	type Ingredient {
		_id: ID!
		name: String!
	}

	type Spice {
		_id: ID!
		name: String!
	}

	type Query {
		listDish: [Dish]
		listSpice: [Spice]
		listIngredient: [Ingredient]
		detailIngredient(id: ID!): Ingredient
		detailDish(id: ID!): Dish
	}

	type Mutation {
		addSpice(name: String!): Spice
		addIngredient(name: String!): Ingredient
		addDish(name: String!, ingredientId: [String!], spiceId: [String!]): Dish
		removeDish(id: ID!): Dish
		updateDish(
			_id: ID!
			name: String!
			ingredientId: [String!]
			spiceId: [String!]
		): Dish
	}
`;

module.exports = typeDefs;
