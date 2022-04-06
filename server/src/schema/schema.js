const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Dish {
		name: String!
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
	}

	type Mutation {
		addSpice(name: String!): Spice
		addIngredient(name: String!): Ingredient
	}
`;

module.exports = typeDefs;
