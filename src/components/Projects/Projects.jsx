import { Card, Row, Col } from "react-bootstrap";
import "./Projects.scss";
import React from "react";

const Projects = () => {
  return (
    <section id="Projects">
      <div className="container-fluid">
        <h2 style={{"textAlign" : "center"}}>Some Projects I've Built</h2>
        <hr />
        <br />
        <Card>
          <Row>
            <Col sm={6} lg={4}>
              <Card.Link
                href="https://github.com/llbbllbb2000/llbbllbb2000.github.io"
                target="_blank"
              >
                <Card.Title>TCP/IP Protocol</Card.Title>
                <Card.Text>Built a whole TCP/IP Protocol, IP Router, and ARP Protocol.</Card.Text>
              </Card.Link>
            </Col>
            <Col sm={6} lg={4}>
              <Card.Link
                href="https://github.com/llbbllbb2000/llbbllbb2000.github.io"
                target="_blank"
              >
                <Card.Title>Cancer Detection</Card.Title>
                <Card.Text>Devised a convolutional neural network (CNN) image classification system</Card.Text>
              </Card.Link>
            </Col>
            <Col sm={6} lg={4}>
              <Card.Link
                href="https://github.com/llbbllbb2000/llbbllbb2000.github.io"
                target="_blank"
              >
                <Card.Title>Personal Website</Card.Title>
                <Card.Text>Designed a personal website using HTML5/CSS/JS, Bootstrap, and React.js</Card.Text>
                <br />
              </Card.Link>
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
