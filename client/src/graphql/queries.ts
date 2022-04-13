import { gql } from "@apollo/client";

export const GET_INGREDIENT = gql`
	query GetIngredients {
		listIngredient {
			_id
			name
		}
	}
`;

export const GET_SPICE = gql`
	query GetSpices {
		listSpice {
			_id
			name
		}
	}
`;

export const GET_DISHES = gql`
	query GetDishes {
		listDish {
			_id
			name
			ingredients {
				_id
				name
			}
			spices {
				_id
				name
			}
		}
	}
`;

export const GET_DISH = gql`
	query GetDish($id: ID!) {
		detailDish(id: $id) {
			_id
			name
			ingredients {
				_id
				name
			}
			spices {
				_id
				name
			}
		}
	}
`;
