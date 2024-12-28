"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar,Container, Nav } from "react-bootstrap";

export default function NavBar() {
    const pathname = usePathname();


    console.log(pathname)

    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container className="justify-content-between">
                <Navbar.Brand href="/" as={Link}>NextJs Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navber"/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/hello" as={Link} active={pathname === "/hello"}>Hello</Nav.Link>
                        <Nav.Link href="/about" as={Link} active={pathname === "/about"}>About</Nav.Link>
                        <Nav.Link href="/contact" as={Link}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}