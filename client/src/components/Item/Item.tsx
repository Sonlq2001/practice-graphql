import React, { useState } from "react";
import { Col, Card, Modal, Button } from "react-bootstrap";
import { useMutation, useLazyQuery } from "@apollo/client";

import { DELETE_DISH } from "../../graphql/mutations";
import { GET_DISHES, GET_DISH } from "../../graphql/queries";

interface ItemProps {
	item: any;
	handleGetItem: (data: any) => void;
}

const Item: React.FC<ItemProps> = ({ item, handleGetItem }) => {
	const [show, setShow] = useState(false);
	const [getDetailDish, { data }] = useLazyQuery(GET_DISH);
	const [removeDish] = useMutation(DELETE_DISH, {
		variables: { id: item._id },
	});

	const handleRemove = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		removeDish({
			variables: { id: item._id },
			refetchQueries: [{ query: GET_DISHES }],
		});
	};

	const handleDetail = () => {
		setShow(true);
		getDetailDish({
			variables: { id: item._id },
		});
	};

	const handleUpdate = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		handleGetItem(item);
	};

	return (
		<>
			<Col lg="3" className="mb-3">
				<Card onClick={handleDetail}>
					<Card.Header style={{ position: "relative" }}>
						{item.name}
						<span
							style={{ position: "absolute", right: 15, cursor: "pointer" }}
						>
							<i
								className="fa-solid fa-pen-to-square me-4"
								style={{ cursor: "pointer" }}
								onClick={handleUpdate}
							/>
							<i
								className="fa-solid fa-xmark"
								onClick={handleRemove}
								style={{ cursor: "pointer" }}
							/>
						</span>
					</Card.Header>
					<Card.Body>
						<Card.Text>
							<b>Thành phần</b>:{" "}
							{item.ingredients.map((ingredient: { name: string }) => (
								<em key={ingredient.name}>{ingredient.name}, </em>
							))}
						</Card.Text>
						<Card.Text>
							<b>Gia vị</b>:{" "}
							{item.spices.map((spice: { name: string }) => (
								<em key={spice.name}>{spice.name}, </em>
							))}
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			{data && (
				<Modal show={show} onHide={() => setShow(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Chi tiết món</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<mark>Tên món: {data.detailDish.name}</mark>
						<div className="mt-2">
							<div>Thành phần chính: </div>
							<ul className="mt-1">
								{data.detailDish.ingredients.map(
									(item: { _id: string; name: string }) => (
										<li key={item._id}>{item.name}</li>
									)
								)}
							</ul>
						</div>
						<div className="mt-2">
							<div>Gia vị: </div>
							<ul className="mt-1">
								{data.detailDish.spices.map(
									(item: { _id: string; name: string }) => (
										<li key={item._id}>{item.name}</li>
									)
								)}
							</ul>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => setShow(false)}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</>
	);
};

export default Item;
