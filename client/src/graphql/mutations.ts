import { gql } from "@apollo/client";

export const POST_DISH = gql`
	mutation PostDish(
		$name: String!
		$ingredientId: [String!]
		$spiceId: [String!]
	) {
		addDish(name: $name, ingredientId: $ingredientId, spiceId: $spiceId) {
			_id
			name
			ingredients {
				name
			}
		}
	}
`;

export const DELETE_DISH = gql`
	mutation DeleteDish($id: ID!) {
		removeDish(id: $id) {
			_id
			name
		}
	}
`;

export const PATCH_DISH = gql`
	mutation PatchDish(
		$_id: ID!
		$name: String!
		$ingredientId: [String!]
		$spiceId: [String!]
	) {
		updateDish(
			_id: $_id
			name: $name
			ingredientId: $ingredientId
			spiceId: $spiceId
		) {
			_id
			name
		}
	}
`;
