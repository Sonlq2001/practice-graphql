import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar bg="light">
			<Container>
				<Navbar.Brand href="#home">
					<h4>RESTFUL & Graphql</h4>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
