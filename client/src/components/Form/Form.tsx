import React from "react";
import { Form as FormBox, Button, Spinner } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";

import { GET_INGREDIENT, GET_SPICE, GET_DISHES } from "../../graphql/queries";
import { POST_DISH, PATCH_DISH } from "../../graphql/mutations";
import { INIT_DISH } from "../../helpers/app.helpers";

type TDishData = {
	_id?: string;
	name: string;
	ingredientId: string[];
	spiceId: string[];
};

interface FormProps {
	initDish: TDishData;
	setInitDish: (data: any) => void;
}
const Form: React.FC<FormProps> = ({ initDish, setInitDish }) => {
	const { data, loading, error } = useQuery(GET_INGREDIENT);
	const { data: dataSpices, loading: loadingSpice } = useQuery(GET_SPICE);

	const [actionDish, { loading: actionDishLoading }] = useMutation(
		initDish._id ? PATCH_DISH : POST_DISH
	);

	const handleCheckedSpice = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInitDish((prevData: TDishData) => {
			if (prevData.spiceId.includes(value)) {
				return {
					...prevData,
					spiceId: prevData.spiceId.filter((item) => item !== value),
				};
			} else {
				return {
					...prevData,
					spiceId: [...prevData.spiceId, value],
				};
			}
		});
	};

	const handleCheckedIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInitDish((prevData: TDishData) => {
			if (prevData.ingredientId.includes(value)) {
				return {
					...prevData,
					ingredientId: prevData.ingredientId.filter((item) => item !== value),
				};
			} else {
				return {
					...prevData,
					ingredientId: [...prevData.ingredientId, value],
				};
			}
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		actionDish({
			variables: { ...initDish },
			refetchQueries: [{ query: GET_DISHES }],
		});
		setInitDish(INIT_DISH);
	};
	if (error) {
		return <div>Có lỗi xảy ra ....</div>;
	}
	return (
		<FormBox onSubmit={handleSubmit}>
			<h4>Công thức</h4>
			<FormBox.Group className="mb-3" controlId="formGroupEmail">
				<FormBox.Label>Tên món</FormBox.Label>
				<FormBox.Control
					type="text"
					placeholder="Tên món"
					name="name"
					value={initDish.name}
					onChange={(e) =>
						setInitDish({ ...initDish, [e.target.name]: e.target.value })
					}
				/>
			</FormBox.Group>
			<FormBox.Group className="mb-3" controlId="formGroupPassword">
				<FormBox.Label>Thành phần</FormBox.Label>
				<div className="d-flex flex-wrap">
					{!loading &&
						data.listIngredient.length > 0 &&
						data.listIngredient.map((item: { _id: string; name: string }) => (
							<FormBox.Check
								key={item._id}
								id={item._id}
								value={item._id}
								label={item.name}
								checked={initDish.ingredientId.includes(item._id)}
								type="checkbox"
								className="ms-4"
								name="ingredientId"
								onChange={handleCheckedIngredient}
							/>
						))}
				</div>
			</FormBox.Group>
			<FormBox.Group className="mb-3" controlId="formGroupPassword">
				<FormBox.Label>Gia vị</FormBox.Label>
				<div className="d-flex flex-wrap">
					{!loadingSpice &&
						dataSpices.listSpice.length > 0 &&
						dataSpices.listSpice.map((item: { _id: string; name: string }) => (
							<FormBox.Check
								key={item._id}
								id={item._id}
								label={item.name}
								value={item._id}
								checked={initDish.spiceId.includes(item._id)}
								type="checkbox"
								name="spiceId"
								className="ms-4"
								onChange={handleCheckedSpice}
							/>
						))}
				</div>
			</FormBox.Group>
			<FormBox.Group className="mt-5">
				<Button type="submit">
					{actionDishLoading && (
						<Spinner
							as="span"
							animation="border"
							size="sm"
							role="status"
							aria-hidden="true"
							className="me-2"
						/>
					)}
					Thêm công thức
				</Button>
				<Button className="ms-5" onClick={() => setInitDish(INIT_DISH)}>
					Clear
				</Button>
			</FormBox.Group>
		</FormBox>
	);
};

export default Form;
