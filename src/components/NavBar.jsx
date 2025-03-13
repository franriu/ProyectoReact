
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => (
<Navbar bg="secondary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">JordanEc</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link to="/"as={NavLink}>
        t-shirt
        </Nav.Link>
        <Nav.Link to="/category/azul" as={NavLink}>
        Sneakers</Nav.Link>
        <Nav.Link to="/category/rojo" as={NavLink}>
        cart</Nav.Link>
        </Nav>
        </Container>
</Navbar>
);