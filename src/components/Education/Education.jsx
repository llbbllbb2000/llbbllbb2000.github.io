import { Button, Card, Collapse } from "react-bootstrap";
import "./Education.scss";
import React, { useState } from "react";

const Education = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="Education">
      <div className="container-fluid">
        <h2>My Education</h2>
        <hr />
        <br />
        <Card>
          <Button
            variant="dark"
            size="lg"
            onClick={() => setOpen(open ^ 1)}
            aria-controls="edu-1"
            aria-expanded={(open & 1) == 1}
          >
            Brandeis University
          </Button>
          <br />
          <Collapse in={(open & 1) == 1}>
            <ol>
              <p style={{ display: "flex", justifyContent: "end" }}>
                08/2022 - 05/2024
              </p>
              <li>
                Java Programming: <br />
                Learned OOP Programming, and understood how to use data
                structures in Java, such as ArrayList, Stacks, and Queues.
              </li>
              <br />
              <li>
                Data Structures : <br />
                Leveraged classical algorithms, like Merge sort, AVL tree, and
                Dijkstra, using Java.
              </li>
              <br />
              <li>
                Operating System : <br />
                Understanding assembly code, concurrent programming, and lock
                techniques such as read-write lock and spinlock.
              </li>
            </ol>
          </Collapse>
        </Card>
        <br />
        <br />
        <Card>
          <Button
            variant="dark"
            size="lg"
            onClick={() => setOpen(open ^ 2)}
            aria-controls="edu-1"
            aria-expanded={(open & 2) == 2}
          >
            Dalian University of Technology
          </Button>
          <br />
          <Collapse in={(open & 2) == 2}>
            <ol>
              <p style={{ display: "flex", justifyContent: "end" }}>
                09/2018 - 06/2022
              </p>
              <li>
                C++ Programming : <br />
                Understood C++ STL and new features in C++11, like auto and
                smart pointers
              </li>
              <br />
              <li>
                Python for Data Analysis : <br />
                Used Python libraries, like numpy, pandas, and matplotlib, to do
                data cleaning, data analysis, and data visualization.
              </li>
              <br />
              <li>
                Mathematical Modeling with MATLAB : <br />
                Led a 3-people team to create a model based on the Monte Cario
                method and binomial distribution, and won first price in a
                school competition
              </li>
            </ol>
          </Collapse>
        </Card>
      </div>
    </section>
  );
};

export default Education;
