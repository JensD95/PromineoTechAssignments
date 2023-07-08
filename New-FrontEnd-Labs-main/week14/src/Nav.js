import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'reactstrap';

new class Nav {
    render() {
        return (
            <div>
                <nav className="navbar-dark nav">Movie Reviews</nav>
            </div>
        )
    }
}

export default function NavbarComponent() {
    return (
        <div>
            <Navbar color="light" dark>
                <Container>
                    <NavbarBrand color='light' className='nav' href="/">Movie Reviews</NavbarBrand>
                    <Nav>
                       
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}