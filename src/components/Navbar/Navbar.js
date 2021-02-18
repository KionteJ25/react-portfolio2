import React from 'react';
import { Nav, NavLink, NavbarContainer } from './Navbar.elements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;