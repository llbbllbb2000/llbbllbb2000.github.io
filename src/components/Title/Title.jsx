import { Nav, Navbar } from "react-bootstrap";
import "./Title.scss";
import React from "react";

const Title = () => {
  let contents = ["Home", "About", "Education", "Experience", "Future"];

  return (
    <section id="Title">
      <Navbar collapseOnSelect>
        <div className="container-fluid">
          {/* <nav className="navbar navbar-expand-lg navbar-dark">
          {contents.map(content => (
            <a className={`nav-item ${content}`} href={`#${content}`}>
              {content}
            </a>
          ))}
        </nav> */}
          {/* <Navbar.Toggle aria-controls={""} */}
        </div>
      </Navbar>
    </section>
  );
};

export default Title;
