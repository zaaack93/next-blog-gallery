"use client";
import { Navbar,Container, Nav } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container className="justify-content-between">
                <Navbar.Brand href="/">NextJs Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navber"/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/hello">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}