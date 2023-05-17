import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Title.scss";
import React from "react";
import Zimage from "../../assets/images/Z.svg"

const Title = () => {
  let contents = ["About", "Education", "Experience", "Future"];

  return (
    <section id="Title">
      <Navbar expand="md">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "#E1E1E1" }}>
            <img className="z-image" src={Zimage} alt="Z" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="list justify-content-end">
            <Nav>
              {contents.map((content) => (
                <Nav.Link className="item" href={`#${content}`}>
                  {content}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Title;
