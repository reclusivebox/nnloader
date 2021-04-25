import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";

import logo from "../images/logoGreen.svg";
// import "../styles/navbar.scss";

import "../styles/base.scss";
import {highlightOnHover} from '../styles/modules/NavBar.module.scss';

type NavLinksProps = React.PropsWithChildren<{
  links: { [title: string]: string },
  activeNavId?: string
}>;
export function NavLinks(props: NavLinksProps) {
  return (
    <Nav activeKey={props.activeNavId ?? ''} variant="pills" className="align-items-center">
      {Object.entries(props.links).map(([title, link]) => {
        return (
            <Nav.Item key={title + link}>
                <Nav.Link
                    className={`${highlightOnHover}`}
                    as={Link}
                    to={link}
                    eventKey={link}
                >
                    {title}
                </Nav.Link>
            </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default function ProjectNavbar(props: {activeNavId?: string}) {
  const links = {
    Installation: "/docs/start",
    Strings: "/docs/strings",
    JSON: "/docs/json",
    Buffers: "/docs/buffer",
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="shadow-sm">
      <Navbar.Brand as={Link} to="/">
        <img
          className="img-fluid"
          style={{ height: "3em" }}
          src={logo}
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLinks links={links} activeNavId={props.activeNavId}/>
      </Navbar.Collapse>
    </Navbar>
  );
}
