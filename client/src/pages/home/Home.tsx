import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";

import { GET_DISHES } from "./../../graphql/queries";
import Form from "./../../components/Form/Form";
import Item from "./../../components/Item/Item";
import Chat from "./../../components/Chat/Chat";
import { INIT_DISH } from "../../helpers/app.helpers";
import { TDishData } from "../../constants/app.constants";

const Home = () => {
	const { data, loading } = useQuery(GET_DISHES);
	const [initDish, setInitDish] = useState<TDishData>(INIT_DISH);

	const handleGetItem = (data: any) => {
		const itemEdit = data && {
			...data,
			ingredientId: data.ingredients.map((item: { _id: string }) => item._id),
			spiceId: data.spices.map((item: { _id: string }) => item._id),
		};
		setInitDish(itemEdit);
	};

	return (
		<Container fluid className="mt-4">
			<Row>
				<Col lg="8">
					<h4>Danh sách</h4>
					{loading && <Spinner animation="border" variant="primary" />}
					{!loading && (
						<Row>
							{data.listDish.map((item: any) => {
								return (
									<Item
										key={item._id}
										item={item}
										handleGetItem={handleGetItem}
									/>
								);
							})}
						</Row>
					)}
				</Col>
				<Col lg="4">
					<Form initDish={initDish} setInitDish={setInitDish} />
				</Col>
			</Row>

			<Chat />
		</Container>
	);
};

export default Home;
