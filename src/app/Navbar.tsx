"use client";
import Link from "next/link";
import { Navbar,Container, Nav } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container className="justify-content-between">
                <Navbar.Brand href="/" as={Link}>NextJs Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navber"/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/hello" as={Link}>Home</Nav.Link>
                        <Nav.Link href="/about" as={Link}>About</Nav.Link>
                        <Nav.Link href="/contact" as={Link}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}