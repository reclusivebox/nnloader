import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'gatsby';

import logo from '../images/logoGreen.svg';
import '../styles/navbar.scss';

type NavLinksProps = React.PropsWithChildren<{links: {[title: string]: string}}>;
export function NavLinks(props: NavLinksProps) {
    return (
        <Nav>
            {Object.entries(props.links).map(([title, link]) => {
                return <Nav.Link className="primaryHover" key={title+link} as={Link} to={link}>{title}</Nav.Link>;
            })}
        </Nav>
    );
}

export default function ProjectNavbar() {
    const links = {
        'Installation': '/docs/start',
        'Strings': '/docs/strings',
        'JSON': '/docs/json',
        'Buffers': '/docs/buffer',
    };
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/"><img className="img-fluid" style={{height: '3em'}} src={logo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLinks links={links} />
            </Navbar.Collapse>
        </Navbar>
    );
}