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
	}

	type Mutation {
		addSpice(name: String!): Spice
		addIngredient(name: String!): Ingredient
		addDish(name: String!, ingredientId: [ID!]!, spiceId: [ID!]!): Dish
	}
`;

module.exports = typeDefs;
