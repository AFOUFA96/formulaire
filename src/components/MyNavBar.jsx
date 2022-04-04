import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas, NavDropdown, } from 'react-bootstrap';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function MyNavBar(props) {
    const { auth } = useContext(AuthContext);

    return (
        <>
            {/* <nav className="myNav navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand navTitle lettre-space-2 ">Bienvenue !</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse myNavTitles" id="navbarNav">
                        <ul className="navbar-nav">
                            {auth.role === 2 && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">
                                        Admin
                                    </Link>
                                </li>
                            )}
                            {auth.role === 1 && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user">
                                        User
                                    </Link>
                                </li>
                            )}
                            {auth.role > 0 && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/account">
                                        Account
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            {auth.role === 0 && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                            )}
                            {auth.role === 0 && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                            )}
                            {auth.role > 0 && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                        Logout
                                    </Link>
                                </li>

                            )}
                            <li className="nav-item">
                                <a className="nav-link active myNavTitles" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link myNavTitles" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link myNavTitles " href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link  myNavTitles ">Login </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <Navbar className="myNav" bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand className="navTitle lettre-space-2" href="#">Bienvenue !</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Bienvenue !</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className="myNavTitles" href="/">Home</Nav.Link>
                                {auth.role === 1 && <Nav.Link className="myNavTitles" href="/user">User</Nav.Link>}
                                {auth.role === 2 && <Nav.Link className="myNavTitles" href="/admin">Admin</Nav.Link>}
                                {auth.role > 0 && <Nav.Link className="myNavTitles" href="/account">Account</Nav.Link>}
                                {auth.role === 0 && <Nav.Link className="myNavTitles" href="/login">login</Nav.Link>}
                                {auth.role === 0 && <Nav.Link className="myNavTitles" href="/register">Register</Nav.Link>}
                                {auth.role > 0 && <Nav.Link className="myNavTitles" href="/logout">logout</Nav.Link>}
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/* 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            
        </>
    );
}
export default MyNavBar;